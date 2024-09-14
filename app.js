<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Save Key to Local Storage</title>
</head>
<body>
    <h1>Key Saved to Local Storage on Page Load</h1>

    <script>
        window.onload = function() {
            const predefinedKey = "jackstevebruce"; // Change this to your desired key
            localStorage.setItem('storedKey', predefinedKey);
            console.log("Predefined key saved to localStorage!");
        };
    </script>
</body>
</html>
