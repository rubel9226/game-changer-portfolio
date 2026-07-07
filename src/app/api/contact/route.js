import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, phone, company, message } = body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "mdrubelhossen9226@gmail.com",
            subject: ` Portfolio Contact From ${name}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, Helvetica, sans-serif;
                            background-color: #0f172a;
                            padding: 30px;
                            color: #e2e8f0;
                        }

                        .container {
                            max-width: 650px;
                            margin: auto;
                            background: #111827;
                            border-radius: 16px;
                            padding: 30px;
                            border: 1px solid #334155;
                        }

                        .header {
                            text-align: center;
                            padding-bottom: 20px;
                            border-bottom: 1px solid #334155;
                        }

                        .header h1 {
                            color: #38bdf8;
                            margin-bottom: 10px;
                        }

                        .header p {
                            color: #94a3b8;
                        }

                        .info {
                            margin-top: 25px;
                        }

                        .item {
                            background: #1e293b;
                            padding: 15px;
                            border-radius: 10px;
                            margin-bottom: 12px;
                        }

                        .label {
                            color: #38bdf8;
                            font-weight: bold;
                            font-size: 14px;
                        }

                        .value {
                            color: #f8fafc;
                            margin-top: 5px;
                            font-size: 16px;
                        }

                        .message {
                            background: #020617;
                            padding: 20px;
                            border-radius: 12px;
                            margin-top: 20px;
                            line-height: 1.7;
                        }

                        .footer {
                            text-align: center;
                            margin-top: 30px;
                            color: #64748b;
                            font-size: 13px;
                        } 
                    </style>
                </head> 
                <body> 
                    <div class="container">
                        <div class="header">
                            <h1>🚀 Game Changer Portfolio</h1>
                            <p>New Contact Form Submission</p>
                        </div>

                        <div class="info">
                            <div class="item">
                                <div class="label">👤 Name</div>
                                <div class="value">${name}</div>
                            </div>

                            <div class="item">
                                <div class="label">📧 Email</div>
                                <div class="value">${email}</div>
                            </div>

                            <div class="item">
                                <div class="label">📞 Phone</div>
                                <div class="value">${phone || "Not Provided"}</div>
                            </div>

                            <div class="item">
                                <div class="label">🏢 Company</div>
                                <div class="value">${company || "Not Provided"}</div>
                            </div>

                            <div class="message">
                                <h3 style="color:#38bdf8;">
                                    💬 Message
                                </h3>
                                <p>
                                    ${message}
                                </p>
                            </div>
                        </div>

                        <div class="footer">
                            <p>
                                This message was sent from
                                <b>Rubel Hossen's Portfolio Website</b>
                            </p>
                            <p>
                                © ${new Date().getFullYear()} Game Changer Portfolio
                            </p>
                        </div>
                    </div>
                </body>
                </html>
                `
        });
        return Response.json({
            success:true,
            message:"Email sent successfully"
        });
    } catch(error){
        console.log(error)
        return Response.json({
            success:false,
            error:error.message
        },{
            status:500
        });
    }
}