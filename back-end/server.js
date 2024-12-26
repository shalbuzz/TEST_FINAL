const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// app.options('*', cors()); 
// app.use(cors({
//     origin: 'http://localhost:5173',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
//   }));
//   app.use(cors({ origin: 'http://localhost:5173' }));
  
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const port = 3001;

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'coins_catalog'
});

connection.connect((err) => {
    if(err) {
        console.error("Error connecting to the db" + err.stack)
    }
    console.log("Connected to the database");
});

app.get('/coins', (req, res) => {
    connection.query('SELECT * FROM coins', (error, results) => {
        if (error) {
            res.status(500).send({ error: 'Ошибка при получении данных' });
        } else {
            res.status(200).json(results);
        }
    });
});
app.get('/coins_by_type/:typeId', (req, res) => {
    const { typeId } = req.params;
    const query = 'SELECT * FROM coins WHERE type_id = ?';
    connection.query(query, [typeId], (error, results) => {
        if (error) {
            console.error('Error fetching coins by type:', error);
            res.status(500).send({ error: 'Ошибка при получении монет по типу' });
        } else {
            res.status(200).json(results);
        }
    });
});

app.get('/coins/:id', (req, res) => {
    const coinId = req.params.id;
    connection.query('SELECT * FROM coins WHERE id = ?', [coinId], (error, results) => {
        if (error) {
            res.status(500).send({ error: 'Ошибка при получении данных' });
        } else if (results.length === 0) {
            res.status(404).send({ message: 'Монета не найдена' });
        } else {
            res.status(200).json(results[0]);
        }
    });
});

app.get('/coin_types', (req, res) => {
    const query = 'SELECT id, name, image_for FROM coin_types'; // Убедитесь, что `image_url` включено
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Ошибка при выполнении запроса:', error);
            res.status(500).send({ error: 'Ошибка сервера' });
        } else {
            res.status(200).json(results);
        }
    });
});

// app.get('/coins_by_type/:typeId', (req, res) => {
//     const { typeId } = req.params;
//     const query = 'SELECT * FROM coins WHERE type_id = ?'; 
//     connection.query(query, [typeId], (error, results) => {
//         if (error) {
//             console.error('Error fetching coins by type:', error);
//             res.status(500).send({ error: 'Ошибка при получении монет по типу' });
//         } else {
//             res.status(200).json(results);
//         }
//     });
// });

app.get('/coins_by_type/:typeId', (req, res) => {
    const { typeId } = req.params;
    const { page = 1, limit = 10 } = req.query; // Получение параметров пагинации
    const offset = (page - 1) * limit;

    const query = 'SELECT * FROM coins WHERE type_id = ? LIMIT ? OFFSET ?';
    connection.query(query, [typeId, parseInt(limit), parseInt(offset)], (error, results) => {
        if (error) {
            console.error('Ошибка при получении монет по типу с пагинацией:', error);
            res.status(500).send({ error: 'Ошибка при получении монет' });
        } else {
            // Получаем общее количество записей для подсчёта количества страниц
            connection.query(
                'SELECT COUNT(*) AS total FROM coins WHERE type_id = ?',
                [typeId],
                (countError, countResults) => {
                    if (countError) {
                        console.error('Ошибка при подсчёте записей:', countError);
                        res.status(500).send({ error: 'Ошибка при подсчёте записей' });
                    } else {
                        const total = countResults[0].total;
                        res.status(200).json({
                            data: results,
                            total, // Общее количество монет
                            page: parseInt(page),
                            limit: parseInt(limit),
                            totalPages: Math.ceil(total / limit),
                        });
                    }
                }
            );
        }
    });
});


// app.get('/filtered_coins', (req, res) => {
//     const { country, metal, quality, priceFrom, priceTo, yearFrom, yearTo } = req.query;

//     let query = 'SELECT * FROM coins WHERE 1=1';
//     const params = [];

//     if (country) {
//         query += ' AND issuing_country = ?';
//         params.push(country);
//     }

//     if (metal) {
//         query += ' AND composition = ?';
//         params.push(metal);
//     }

//     if (quality) {
//         query += ' AND quality = ?';
//         params.push(quality);
//     }

//     if (priceFrom) {
//         query += ' AND price >= ?';
//         params.push(priceFrom);
//     }

//     if (priceTo) {
//         query += ' AND price <= ?';
//         params.push(priceTo);
//     }

//     if (yearFrom) {
//         query += ' AND year >= ?'; 
//         params.push(yearFrom);
//     }

//     if (yearTo) {
//         query += ' AND year <= ?'; 
//         params.push(yearTo);
//     }

//     connection.query(query, params, (error, results) => {
//         if (error) {
//             console.error('Error fetching filtered coins:', error);
//             res.status(500).send({ error: 'Ошибка при фильтрации монет' });
//         } else {
//             res.status(200).json(results);
//         }
//     });
// });

app.get('/filters', (req, res) => {
    const queries = [
        'SELECT DISTINCT issuing_country FROM coins',
        'SELECT DISTINCT composition AS metal FROM coins',
        'SELECT DISTINCT quality FROM coins',
    ];

    Promise.all(
        queries.map((query) => {
            return new Promise((resolve, reject) => {
                connection.query(query, (error, results) => {
                    if (error) reject(error);
                    resolve(results.map((row) => Object.values(row)[0]));
                });
            });
        })
    )
        .then(([countries, metals, qualities]) => {
            res.status(200).json({
                countries,
                metals,
                qualities,
            });
        })
        .catch((err) => {
            console.error('Ошибка при получении фильтров:', err);
            res.status(500).send({ error: 'Ошибка при получении фильтров' });
        });
});



// app.get('/filters', (req, res) => {

//     const countriesQuery = 'SELECT DISTINCT issuing_country FROM coins';
//     const metalsQuery = 'SELECT DISTINCT composition FROM coins';
//     const qualityQuery = 'SELECT DISTINCT quality FROM coins';

    
//     const filters = {
//         countries: [],
//         metals: [],
//         qualities: []
//     };

    
//     connection.query(countriesQuery, (err1, results1) => {
//         if (err1) {
//             console.error(err1);
//             return res.status(500).json({ error: 'Ошибка при получении списка стран' });
//         }
       
//         filters.countries = results1.map((row) => row.issuing_country);

        
//         connection.query(metalsQuery, (err2, results2) => {
//             if (err2) {
//                 console.error(err2);
//                 return res.status(500).json({ error: 'Ошибка при получении списка металлов' });
//             }
//             filters.metals = results2.map((row) => row.composition);

           
//             connection.query(qualityQuery, (err3, results3) => {
//                 if (err3) {
//                     console.error(err3);
//                     return res.status(500).json({ error: 'Ошибка при получении списка качества' });
//                 }
//                 filters.qualities = results3.map((row) => row.quality);

                
//                 res.status(200).json(filters);
//             });
//         });
//     });
// });

app.post('/coins', (req, res) => {
    const { name, description, type_id, issuing_country, composition, quality, denomination, year, weight, price,image,image2 } = req.body;


    const query = 'INSERT INTO coins (name, description, type_id, issuing_country, composition, quality, denomination, year, weight, price, image, image2) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [name, description, type_id, issuing_country, composition, quality, denomination, year, weight, price,image,image2], (error, results) => {
        if (error) {
            res.status(500).send({ error: 'Ошибка при добавлении монеты' });
        } else {
            res.status(201).send({ message: 'Монета добавлена успешно', coinId: results.insertId });
        }
    });
});
app.put('/coins/:id', (req, res) => {
    const coinId = req.params.id;
    const { name, description, type_id, issuing_country, composition, quality, denomination, year, weight, price,image,image2 } = req.body;

    const query = 'UPDATE coins SET name = ?, description = ?, type_id = ?, issuing_country = ?, composition = ?, quality = ?, denomination = ?, year = ?, weight = ?, price = ?, image = ?, image2= ? WHERE id = ?';
    connection.query(query, [name, description, type_id, issuing_country, composition, quality, denomination, year, weight, price, image,image2,coinId], (error, results) => {
        if (error) {
            res.status(500).send({ error: 'Ошибка при обновлении данных' });
        } else if (results.affectedRows === 0) {
            res.status(404).send({ message: 'Монета не найдена' });
        } else {
            res.status(200).send({ message: 'Монета обновлена успешно' });
        }
    });
});

app.delete('/coins/:id', (req, res) => {
    const coinId = req.params.id;

    const query = 'DELETE FROM coins WHERE id = ?';
    connection.query(query, [coinId], (error, results) => {
        if (error) {
            res.status(500).send({ error: 'Ошибка при удалении монеты' });
        } else if (results.affectedRows === 0) {
            res.status(404).send({ message: 'Монета не найдена' });
        } else {
            res.status(200).send({ message: 'Монета удалена успешно' });
        }
    });
});


const bcrypt = require('bcryptjs');
const saltRounds = 10;

app.post('/register', async (req, res) => {
    const { login, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const query = 'INSERT INTO users (login, password_hash) VALUES (?, ?)';
        connection.query(query, [login, hashedPassword], (err, results) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(400).json({ error: 'Login already exists' });
                }
                return res.status(500).json({ error: 'Database error' });
            }
            res.status(201).json({ message: 'User registered successfully' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error registering user' });
    }
});


app.post('/login', async (req, res) => {
    const { login, password } = req.body;

    const query = 'SELECT * FROM users WHERE login = ?';
    connection.query(query, [login], async (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }

        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid login or password' });
        }

        const user = results[0];
        const isPasswordCorrect = await bcrypt.compare(password, user.password_hash);

        if (isPasswordCorrect) {
            res.status(200).json({ success: true });
        } else {
            res.status(401).json({ error: 'Invalid login or password' });
        }
    });
});

app.get('/paginated_coins', (req, res) => {
    const { page = 1, limit = 10 } = req.query; 
    const offset = (page - 1) * limit;

    const query = 'SELECT * FROM coins LIMIT ? OFFSET ?';
    connection.query(query, [parseInt(limit), parseInt(offset)], (error, results) => {
        if (error) {
            console.error('Error fetching paginated coins:', error);
            res.status(500).send({ error: 'Ошибка при получении данных с пагинацией' });
        } else {
            
            connection.query('SELECT COUNT(*) AS total FROM coins', (countError, countResults) => {
                if (countError) {
                    console.error('Error fetching total count:', countError);
                    res.status(500).send({ error: 'Ошибка при подсчёте записей' });
                } else {
                    const total = countResults[0].total;
                    res.status(200).json({
                        data: results,
                        total,
                        page: parseInt(page),
                        limit: parseInt(limit),
                    });
                }
            });
        }
    });
});



app.listen(port, () => {
    console.log(`${port} port was run successfuly`);
})