# Setup file template to upload data to MongoDB Atlas
mongoimport --uri "mongodb+srv://mongodbUser:mongodbUserPassword@qkart-node.ut4qzjf.mongodb.net/test" --drop --collection users --file data/export_qkart_users.json
mongoimport --uri "mongodb+srv://mongodbUser:mongodbUserPassword@qkart-node.ut4qzjf.mongodb.net/test" --drop --collection products --file data/export_qkart_products.json