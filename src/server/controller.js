require("dotenv").config();
console.log(process.env.CONNECTION_STRING);
const Sequelize = require("sequelize");
const { CONNECTION_STRING } = process.env;
const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {  
  seed: async (req, res) => {
    try {
        await sequelize.query(
            `DROP TABLE IF EXISTS car_listing;
            DROP TABLE IF EXISTS user_reviews;
            DROP TABLE IF EXISTS contact_information;

            CREATE TABLE car_listing (
                car_id SERIAL PRIMARY KEY,
                Make varchar(100),
                Model varchar(100),
                Year integer,
                Down_Payment integer,
                Description text
            );
      
            CREATE TABLE user_reviews(
                reviews_id SERIAL PRIMARY KEY,
                car_id integer REFERENCES car_listing(car_id),
                Rating integer,
                Review text,
                Timestamp timestamp,
                review_title varchar(70)
            );
  
            CREATE TABLE contact_information (
                contact_id SERIAL PRIMARY KEY,
                Phone varchar(20),
                Email varchar(50),
                Name varchar(200),
                Last_Name varchar(200),
                car_id integer REFERENCES car_listing(car_id)
            );

            INSERT INTO car_listing (Make, Model, Year, Down_Payment, Description)
            VALUES ('Buick', 'Verano', 2014, 2300, 'Clean Title'),
                   ('Ford', 'Escape', 2016, 2800, 'Clean Title'),
                   ('Ranger Rover', 'Evoque', 2013, 3500, 'Clean Title');

            INSERT INTO user_reviews(Rating, Review, Timestamp, review_title)
            VALUES (5, 'perfect condition', NULL, 'Bought my car yesterday');

            INSERT INTO contact_information (Phone, Email, Name, Last_Name)
            VALUES ('98090808', '@gofer.com', 'Michelle','Sauceda');
        `)
        .then(() => {
            console.log("DB seeded!");
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log("error seeding DB", err);
        });
    } catch(err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
  },
  
  getCar: (req, res) => {
    sequelize.query(`
      SELECT * FROM car_listing;
    `)
    .then(dbRes => res.status(200).send(dbRes[0]))
    .catch(err => res.status(500).send(err))
  },
};






  //   createContact:(req,res) => {
  //      const {Phone,Email,Name,Last,Question} = req.body

  //      sequelize.query(`
  //       INSERT INTO tasks(task_description, task_date, task_status)
  //       VALUES ('${task_description}', '${task_date}', '${task_status}'
  //       ) RETURNING *
  //       `)
  //       .then(dbRes => {
  //         res.status(200).send(dbRes[0])
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       res.status(400).send(err)
  //     })
  //   },
  //   getTasks:(req, res) => {
  //     sequelize.query(`
  //     SELECT * FROM tasks;
  //     `)
  //     .then(dbRes => res.status(200).send(dbRes[0]))
  //     .catch(err => res.status(500).send(err))
  // },
  // deleteTask:(req,res) => {
  //   const {task_id} = req.params
  //   console.log(task_id)
  //   sequelize.query(`
  //       DELETE FROM tasks
  //       WHERE task_id = ${task_id};
  //   `)
  //   .then(dbRes => res.status(200).send(dbRes[0]))
  //   .catch(err => res.status(500).send(err))
  // },
  //   createRoutine:(req,res) => {
  //   const {routine_description, routine_frequency} = req.body

  //   sequelize.query(`
  //   INSERT INTO routine(routine_description, routine_frequency)
  //   VALUES ('${routine_description}', '${routine_frequency}')
  //   RETURNING *
  //   `)
  //   .then(dbRes => {
  //     res.status(200).send(dbRes[0])
  // })
  // .catch(err => {
  //   console.log(err)
  //   res.status(400).send(err)
  // })
  // },











  // deleteRoutine:(req,res) => {
  //   const {routine_id} = req.params

  //   sequelize.query(`
  //       DELETE FROM routine
  //       WHERE routine_id = ${routine_id};
  //   `)
  //   .then(dbRes => res.status(200).send(dbRes[0]))
  //   .catch(err => res.status(500).send(err))
  // },
  // updateTask:(req,res) => {
  //   const taskId = req.params.task_id;
  //   const {task_description, task_date, task_status} = req.body;

  //   sequelize.query(`
  //   UPDATE tasks
  //   SET
  //   task_description= '${task_description}',
  //   task_date='${task_date}',
  //   task_status='${task_status}'
  //   WHERE task_id= '${taskId}';
  //   `)
  //   .then(dbRes => {
  //     res.status(200).send(dbRes[0])
  // })
  // .catch(err => {
  //   console.log(err)
  //   res.status(400).send(err)
  // })
  // }

