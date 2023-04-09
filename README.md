# Restaurant-Application
This project is a bill management system that allows users to enter the details of the bill such as price, dish, and table number. The entered details are then stored on the server using Axios. The system also allows users to delete the bill details from the server and screen.

## Installation
``` 
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

## Usage
To use the system, follow the below steps:

1. Enter the bill details such as price, dish, and table number.

2. Click on the 'Submit' button to store the details on the server.

3. The entered details will be displayed on the screen under the respective table number.

4. To delete the details, click on the 'Delete' button next to the bill details you want to delete.

## API Reference
This project uses Axios to interact with the server. The **post()** method is used to store the bill details on the server, and the **delete()** method is used to delete the details. The server used in this project is https://crudcrud.com/.
