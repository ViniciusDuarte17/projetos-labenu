{
	"info": {
		"_postman_id": "e13079dc-1ed1-4991-b418-c00ea36829f2",
		"name": "LABEFOODS",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Signup",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n\t\"name\": \"Astrodev\",\r\n\t\"email\": \"astrodev@future4.com\",\r\n\t\"cpf\": \"111.111.111-11\",\r\n\t\"password\": \"123456\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/signup",
					"protocol": "https",
					"host": [
						"us-central1-missao-newton",
						"cloudfunctions",
						"net"
					],
					"path": [
						"fourFoodB",
						"signup"
					]
				}
			},
			"response": []
		},
		{
			"name": "Login",
			"request": {
				"method": "POST",
				"header": []
			},
			"response": []
		},
		{
			"name": "Add Adress",
			"request": {
				"method": "PUT",
				"header": []
			},
			"response": []
		},
		{
			"name": "Get Full Address",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "Get Profile",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "Update Profile",
			"request": {
				"method": "PUT",
				"header": []
			},
			"response": []
		},
		{
			"name": "Get Restaurants",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "Get Restaurant Detail",
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "auth",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ims1UU9BMFVZMUFoTWZCeHVuc2VqIiwibmFtZSI6InVzdWFyaW8xIiwiZW1haWwiOiJ1c3VhcmlvMUBmdXR1cmU0LmNvbSIsImNwZiI6IjIyMi4yMjIuMjIyLTIzIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIFBlZHJvIGFsdmVzLCA3NywgODEgLSBWaWxhIE4uIFZpZWlyYSIsImlhdCI6MTY1MTAxNDIyM30.GLewy7EgJyWqfXejDmjX9R7aIokp5ERXW_XRDI2CCwo",
						"type": "text"
					}
				],
				"url": {
					"raw": "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/1",
					"protocol": "https",
					"host": [
						"us-central1-missao-newton",
						"cloudfunctions",
						"net"
					],
					"path": [
						"fourFoodB",
						"restaurants",
						"1"
					]
				}
			},
			"response": []
		},
		{
			"name": "Place Order",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "auth",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ims1UU9BMFVZMUFoTWZCeHVuc2VqIiwibmFtZSI6InVzdWFyaW8xIiwiZW1haWwiOiJ1c3VhcmlvMUBmdXR1cmU0LmNvbSIsImNwZiI6IjIyMi4yMjIuMjIyLTIzIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIFBlZHJvIGFsdmVzLCA3NywgODEgLSBWaWxhIE4uIFZpZWlyYSIsImlhdCI6MTY1MTAxNDIyM30.GLewy7EgJyWqfXejDmjX9R7aIokp5ERXW_XRDI2CCwo",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n\t\"products\": [{\r\n\t\t\"id\": \"Wbx5rE17JBrN6JKl4rom\",\r\n\t\t\"quantity\": 10\r\n\t}, {\r\n\t\t\"quantity\": 1,\r\n\t\t\"id\": \"KJqMl2DxeShkSBevKVre\"\r\n\t}],\r\n\t\"paymentMethod\": \"creditcard\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/10/order",
					"protocol": "https",
					"host": [
						"us-central1-missao-newton",
						"cloudfunctions",
						"net"
					],
					"path": [
						"fourFoodB",
						"restaurants",
						"10",
						"order"
					]
				}
			},
			"response": []
		},
		{
			"name": "Orders Active Order",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "Orders History",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/orders/history?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ims1UU9BMFVZMUFoTWZCeHVuc2VqIiwibmFtZSI6InVzdWFyaW8xIiwiZW1haWwiOiJ1c3VhcmlvMUBmdXR1cmU0LmNvbSIsImNwZiI6IjIyMi4yMjIuMjIyLTIzIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIFBlZHJvIGFsdmVzLCA3NywgODEgLSBWaWxhIE4uIFZpZWlyYSIsImlhdCI6MTY1MTAxNDIyM30.GLewy7EgJyWqfXejDmjX9R7aIokp5ERXW_XRDI2CCwo",
					"protocol": "https",
					"host": [
						"us-central1-missao-newton",
						"cloudfunctions",
						"net"
					],
					"path": [
						"fourFoodB",
						"orders",
						"history"
					],
					"query": [
						{
							"key": "auth",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ims1UU9BMFVZMUFoTWZCeHVuc2VqIiwibmFtZSI6InVzdWFyaW8xIiwiZW1haWwiOiJ1c3VhcmlvMUBmdXR1cmU0LmNvbSIsImNwZiI6IjIyMi4yMjIuMjIyLTIzIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIFBlZHJvIGFsdmVzLCA3NywgODEgLSBWaWxhIE4uIFZpZWlyYSIsImlhdCI6MTY1MTAxNDIyM30.GLewy7EgJyWqfXejDmjX9R7aIokp5ERXW_XRDI2CCwo"
						}
					]
				}
			},
			"response": []
		}
	]
}