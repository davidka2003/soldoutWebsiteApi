# soldoutWebsiteApi
api endpoint: /api/successes
<br>
response model:
<br>
{
    "success": boolean,
    "data": { nickname: string, timestamp: number, attachment: string }[](max length 99)
}
default port: 3000 or env.PORT variable
any other routes: code 400, response:{"success":false}
on api error: code 500, response:{
            success: false,
            error:string
        }
to run server: npm run dev or yarn dev, starts with nodemon to prevent app crashes
without nodemon: npm run start or yarn start
