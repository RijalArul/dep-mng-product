{
	"info": {
		"_postman_id": "a75ee471-44a1-4163-bc35-b6a2da251873",
		"name": "manage-inventory",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "admins",
			"item": [
				{
					"name": "create / register admin",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "nama_depan",
									"value": "Admin",
									"type": "text"
								},
								{
									"key": "nama_belakang",
									"value": "Pertama",
									"type": "text"
								},
								{
									"key": "email",
									"value": "admin_1@mail.com",
									"type": "text"
								},
								{
									"key": "tanggal_lahir",
									"value": "1999-05-07",
									"type": "text"
								},
								{
									"key": "jenis_kelamin",
									"value": "pria",
									"type": "text"
								},
								{
									"key": "password",
									"value": "123456",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3030/api/v1/admins",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3030",
							"path": [
								"api",
								"v1",
								"admins"
							]
						}
					},
					"response": []
				},
				{
					"name": "login admin ",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "email",
									"value": "admin_1@mail.com",
									"type": "text"
								},
								{
									"key": "password",
									"value": "123456",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3030/api/v1/admins/login",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3030",
							"path": [
								"api",
								"v1",
								"admins",
								"login"
							]
						}
					},
					"response": []
				},
				{
					"name": "update admin by headers that fill accesstoken with login first",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "access_token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbl8xQG1haWwuY29tIiwiaWF0IjoxNjg0MTg5NTA0fQ.5A8XBPDazCZQ7_gRSNSgxHquNYwl9nhzdyfggHTwFX8",
								"type": "text"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "nama_depan",
									"value": "Adminho",
									"type": "text"
								},
								{
									"key": "jenis_kelamin",
									"value": "Transgender",
									"type": "text",
									"disabled": true
								},
								{
									"key": "password",
									"value": "123456",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3030/api/v1/admins",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3030",
							"path": [
								"api",
								"v1",
								"admins"
							]
						}
					},
					"response": []
				},
				{
					"name": "Get Profile Admin by access token as headers",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "access_token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbl8xQG1haWwuY29tIiwiaWF0IjoxNjg0MTg5NTA0fQ.5A8XBPDazCZQ7_gRSNSgxHquNYwl9nhzdyfggHTwFX8",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:3030/api/v1/admins/profile",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3030",
							"path": [
								"api",
								"v1",
								"admins",
								"profile"
							],
							"query": [
								{
									"key": "",
									"value": null,
									"disabled": true
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "categories",
			"item": [
				{
					"name": "create a category with authenhicate access_token",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "access_token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbl8xQG1haWwuY29tIiwiaWF0IjoxNjg0MTg5NTA0fQ.5A8XBPDazCZQ7_gRSNSgxHquNYwl9nhzdyfggHTwFX8",
								"type": "text"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "nama",
									"value": "logo",
									"type": "text"
								},
								{
									"key": "desc",
									"value": "logo esport",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3030/api/v1/categories",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3030",
							"path": [
								"api",
								"v1",
								"categories"
							]
						}
					},
					"response": []
				},
				{
					"name": "get all categories",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3030/api/v1/categories",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3030",
							"path": [
								"api",
								"v1",
								"categories"
							]
						}
					},
					"response": []
				},
				{
					"name": "get one category by id params",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3030/api/v1/categories/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3030",
							"path": [
								"api",
								"v1",
								"categories",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "update categories by id params with authenthicate access token",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "access_token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbl8xQG1haWwuY29tIiwiaWF0IjoxNjg0MTg5NTA0fQ.5A8XBPDazCZQ7_gRSNSgxHquNYwl9nhzdyfggHTwFX8",
								"type": "text"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "desc",
									"value": "mobil-mobilan",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3030/api/v1/categories/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3030",
							"path": [
								"api",
								"v1",
								"categories",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "delete one category by id params with authenthicate accesstoken",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "access_token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbl8xQG1haWwuY29tIiwiaWF0IjoxNjg0MDU5ODEwfQ.10CYj6sk6D8KayPi0ynkJZkacNXAiKhlTO_iRm2uazc",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:3000/api/v1/categories/4",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"api",
								"v1",
								"categories",
								"4"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "products",
			"item": [
				{
					"name": "create a new products with form data and authenthicate by accesstoken",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "access_token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbl8xQG1haWwuY29tIiwiaWF0IjoxNjg0MTg5NTA0fQ.5A8XBPDazCZQ7_gRSNSgxHquNYwl9nhzdyfggHTwFX8",
								"type": "text"
							}
						],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "nama",
									"value": "Mobil Van 11 VW ",
									"type": "text"
								},
								{
									"key": "desc",
									"value": "Mobil Van 11 VW series rilis",
									"type": "text"
								},
								{
									"key": "gambar",
									"type": "file",
									"src": "/C:/Users/Arul/OneDrive/Pictures/images/pexels-photo-2533092.jpeg"
								},
								{
									"key": "stok",
									"value": "4",
									"type": "text"
								},
								{
									"key": "category_id",
									"value": "1",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3030/api/v1/products",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3030",
							"path": [
								"api",
								"v1",
								"products"
							]
						}
					},
					"response": []
				},
				{
					"name": "get all products",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3030/api/v1/products",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3030",
							"path": [
								"api",
								"v1",
								"products"
							]
						}
					},
					"response": []
				},
				{
					"name": "update products by id. WIth form data and authenthicate by access token in headers",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "access_token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbl8xQG1haWwuY29tIiwiaWF0IjoxNjg0MTg5NTA0fQ.5A8XBPDazCZQ7_gRSNSgxHquNYwl9nhzdyfggHTwFX8",
								"type": "text"
							}
						],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "category_id",
									"value": "",
									"type": "text",
									"disabled": true
								},
								{
									"key": "gambar",
									"type": "file",
									"src": "/C:/Users/Arul/OneDrive/Pictures/images/pexels-photo-2533092.jpeg"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3030/api/v1/products/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3030",
							"path": [
								"api",
								"v1",
								"products",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "Inactive Products",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "access_token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbl8xQG1haWwuY29tIiwiaWF0IjoxNjg0MTg5NTA0fQ.5A8XBPDazCZQ7_gRSNSgxHquNYwl9nhzdyfggHTwFX8",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:3030/api/v1/products/2/inactive",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3030",
							"path": [
								"api",
								"v1",
								"products",
								"2",
								"inactive"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "transactions",
			"item": [
				{
					"name": "create a new transaction with json. Authenthicate by access token in headers",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "access_token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbl8xQG1haWwuY29tIiwiaWF0IjoxNjg0MTg5NTA0fQ.5A8XBPDazCZQ7_gRSNSgxHquNYwl9nhzdyfggHTwFX8",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "[\r\n    {\r\n        \"quantity\": 2,\r\n        \"type\": \"out\",\r\n        \"product_id\": 1\r\n    },\r\n    {\r\n        \"quantity\": 2,\r\n        \"type\": \"in\",\r\n        \"product_id\": 3\r\n    }\r\n]",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3030/api/v1/transactions",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3030",
							"path": [
								"api",
								"v1",
								"transactions"
							]
						}
					},
					"response": []
				},
				{
					"name": "Get All Transactions authenthicate by access token",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "access_token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbl8xQG1haWwuY29tIiwiaWF0IjoxNjg0MTg5NTA0fQ.5A8XBPDazCZQ7_gRSNSgxHquNYwl9nhzdyfggHTwFX8",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:3030/api/v1/transactions",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3030",
							"path": [
								"api",
								"v1",
								"transactions"
							]
						}
					},
					"response": []
				}
			]
		}
	]
}