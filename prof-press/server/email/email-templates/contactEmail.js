export default ({ name }) => `
<!DOCTYPE html>
<html lang="en">
	<head>
		<title></title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<style type="text/css">
			/* CLIENT-SPECIFIC STYLES */
			body,
			table,
			td,
			a {
				-webkit-text-size-adjust: 100%;
				-ms-text-size-adjust: 100%;
			}
			table,
			td {
				mso-table-lspace: 0pt;
				mso-table-rspace: 0pt;
			}
			img {
				-ms-interpolation-mode: bicubic;
			}

			/* RESET STYLES */
			img {
				border: 0;
				height: auto;
				line-height: 100%;
				outline: none;
				text-decoration: none;
			}
			table {
				border-collapse: collapse !important;
			}
			body {
				height: 100% !important;
				margin: 0 !important;
				padding: 0 !important;
				width: 100% !important;
			}

			/* iOS BLUE LINKS */
			a[x-apple-data-detectors] {
				color: inherit !important;
				text-decoration: none !important;
				font-size: inherit !important;
				font-family: inherit !important;
				font-weight: inherit !important;
				line-height: inherit !important;
			}

			/* GMAIL BLUE LINKS */
			u + #body a {
				color: inherit;
				text-decoration: none;
				font-size: inherit;
				font-family: inherit;
				font-weight: inherit;
				line-height: inherit;
			}

			/* SAMSUNG MAIL BLUE LINKS */
			#MessageViewBody a {
				color: inherit;
				text-decoration: none;
				font-size: inherit;
				font-family: inherit;
				font-weight: inherit;
				line-height: inherit;
			}

			/* Universal styles for links and stuff */
			a {
				color: #229efd;
				font-weight: bold;
			}
			a:hover {
				color: #fd6350;
				text-decoration: none;
			}
			a.button:hover {
				background-color: #fd6350 !important;
			}

			/* Responsive styles */
			@media screen and (max-width: 600px) {
				.mobile {
					width: 100% !important;
				}
				h1 {
					font-size: 24px !important;
				}
			}
		</style>
	</head>
	<body
		id="body"
		style="
			margin: 0 !important;
			padding: 0 !important;
			font-family: Roboto, Arial, Helvetica, sans-serif;
			font-size: 17px;
			font-weight: normal;
			line-height: 1.6;
		"
	>
		<!-- Wrapper (pseudo BODY tag) table -->
		<table cellpadding="0" cellspacing="0" width="99%">
			<tr>
				<td align="center" valign="top" width="99%">
					<!-- top basic links table -->
					<table cellpadding="0" cellspacing="0" width="">
						<tr>
							<td align="center" valign="top" width=""></td>
						</tr>
					</table>
					<!-- close top basic links table -->

					<!-- Background table -->
					<table cellpadding="25" cellspacing="0" width="320" bgcolor="#fff">
						<tr>
							<td align="center" valign="top" width="320">
								<!-- Content table -->
								<table cellpadding="0" cellspacing="0" width="320">
									<tr>
										<td colspan="4" align="left" valign="top" width="320">
											<img
												style="border: none; display: block"
												src="https://bythealphabet.s3.amazonaws.com/logo/owl.png"
												alt=""
												title=""
												height="108"
												width="108"
											/>
										</td>
									</tr>
									<tr>
										<td
											colspan="4"
											align="left"
											valign="top"
											width="320"
											style="padding: 2em"
										>
											<h1
												style="
													font-family: Roboto, Arial, Helvetica, sans-serif;
													font-size: 1.7;
													font-weight: normal;
													line-height: 12px;
													text-transform: capitalize;
												"
											>
												Hi ${name},
											</h1>
											<p
												style="
													font-family: Roboto, Arial, Helvetica, sans-serif;
													font-size: 16px;
													font-weight: normal;
													line-height: 1.5;
												"
											>
												I'm so glad that you send me a message. <br />
											</p>
											<p>I will reply to your email. between 24 hours.</p>
											
											<p>Greetings,</p>
											<p>Isaac Lucas</p>
											<a href="http://bythealphabet.com/">bythealphabet.com</a>
										</td>
									</tr>

									

									<tr>
										<td
											colspan="4"
											align="center"
											valign="top"
											width="320"
											style="padding: 2em"
										>
											<p style="color: #515151">copyright bythealphabet</p>
										</td>
									</tr>

									<tr>
										<td
											colspan="4"
											align="center"
											valign="top"
											width="320"
											style="padding: 2em; font-weight: bold"
										>
											<p style="margin-top: 2em">
												If it was someone else<br />
												making a bad joke by using your email to send me a
												message, please ignore this email.
											</p>
										</td>
									</tr>
								</table>
								<!-- close Content table -->
							</td>
						</tr>
					</table>
					<!-- close Background table -->

					<!-- bottom unsubscribe table -->
					<table border="1" cellpadding="0" cellspacing="0" width="">
						<tr>
							<td align="left" valign="top" width=""></td>
						</tr>
					</table>
					<!-- close unsubscribe table -->
				</td>
			</tr>
		</table>
		<!-- close Wrapper (pseudo BODY tag) table -->
	</body>
</html>


`;
