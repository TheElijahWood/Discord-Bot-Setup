If you are wanting to hide your bot token, we can do this by an env file.

Step one (Download DOTENV):

![image](https://github.com/ejgamer19/Discord-Bot-Setup/assets/152716646/0945373f-7bc9-4a6e-ade5-989687fec155)

Step 2:

Create the dotenv file:

![image](https://github.com/ejgamer19/Discord-Bot-Setup/assets/152716646/bef78a67-3bcb-4f7e-b669-3d9a95e4a035)

Go into the .env file and put token='Your Bot Token' replace 'Your Bot Token' with your bot token.
Then go into bot.js and put at the top "require('dotenv').config();".

![image](https://github.com/ejgamer19/Discord-Bot-Setup/assets/152716646/b66a3362-4d2d-4895-9123-544eca223b0e)

Now at the bottem of the code replace 'Your bot token' with "procces.env.token" withought quotations. Its should work exactly the same with the .env file.


