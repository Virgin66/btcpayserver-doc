(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{473:function(e,t,a){e.exports=a.p+"assets/img/notification-page.639418f5.png"},474:function(e,t,a){e.exports=a.p+"assets/img/notification-manage.b3a23cd8.png"},475:function(e,t,a){e.exports=a.p+"assets/img/smtp-setup.f494ae15.png"},476:function(e,t,a){e.exports=a.p+"assets/img/btcpayemailrule1.27a8427f.jpg"},757:function(e,t,a){"use strict";a.r(t);var r=a(9),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"notifications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notifications"}},[e._v("#")]),e._v(" Notifications")]),e._v(" "),t("p",[e._v("Notifications to monitor BTCPay Server events can be configured in several different ways.")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#notification-alerts"}},[e._v("Notification Alerts")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#server-emails"}},[e._v("Server level SMTP (Email)")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#store-emails"}},[e._v("Store level SMTP (Email)")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#tag/Webhooks",target:"_blank",rel:"noopener noreferrer"}},[e._v("Store level Webhooks"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"notification-alerts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notification-alerts"}},[e._v("#")]),e._v(" Notification Alerts")]),e._v(" "),t("p",[e._v("Click the notification icon in the main header to view the current notifications. The notification page shows the status of all current notifications such as invoice events, payouts, version updates, etc. Notifications can be marked as seen from the notifications dropdown or the notifications page.")]),e._v(" "),t("figure",[t("img",{attrs:{src:a(473),alt:"BTCPay Notifications",title:"BTCPay Notifications"}})]),e._v(" "),t("p",[e._v("Each user registered on the server can manage the notifications they receive.")]),e._v(" "),t("figure",[t("img",{attrs:{src:a(474),alt:"BTCPay Manage Notifications",title:"BTCPay Manage Notifications"}})]),e._v(" "),t("h2",{attrs:{id:"server-emails"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-emails"}},[e._v("#")]),e._v(" Server Emails")]),e._v(" "),t("p",[e._v("Emails can be sent from the server-level of BTCPay. These are "),t("a",{attrs:{href:"#user-emails"}},[e._v("user emails")]),e._v(". Admins can setup server SMTP in:")]),e._v(" "),t("p",[e._v("Server Settings > Email server > "),t("a",{attrs:{href:"#smtp-email-setup"}},[e._v("Setup")])]),e._v(" "),t("h2",{attrs:{id:"store-emails"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#store-emails"}},[e._v("#")]),e._v(" Store Emails")]),e._v(" "),t("p",[e._v("Emails can be sent from the store-level of BTCPay. These emails are for store related events such as invoices. Users can setup store SMTP in:")]),e._v(" "),t("p",[e._v("Store Settings > General Settings > Services > Email > "),t("a",{attrs:{href:"#smtp-email-setup"}},[e._v("Setup")])]),e._v(" "),t("h3",{attrs:{id:"smtp-email-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#smtp-email-setup"}},[e._v("#")]),e._v(" SMTP Email Setup")]),e._v(" "),t("p",[e._v("Use the Quick fill settings dropdown for commonly used email client setup parameters. Send yourself a test email from the same page to verify your setup parameters work properly.")]),e._v(" "),t("figure",[t("img",{attrs:{src:a(475),alt:"BTCPay Email SMTP",title:"BTCPay Email SMTP"}})]),e._v(" "),t("p",[e._v("Each email client may have different requirements for setting up SMTP. For more information see this "),t("RouterLink",{attrs:{to:"/FAQ/ServerSettings/#how-to-configure-smtp-settings-in-btcpay"}},[e._v("SMTP FAQ")]),e._v(" or refer to your email provider's documentation.")],1),e._v(" "),t("h1",{attrs:{id:"user-emails"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user-emails"}},[e._v("#")]),e._v(" User Emails")]),e._v(" "),t("p",[e._v("There are various user emails built-in to your BTCPay Server to communicate with your users.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("User emails will only be sent if SMTP is enabled for the server.")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#forgot-password-email"}},[e._v("Forgot Password")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#new-user-confirmation-email"}},[e._v("New User Confirmation")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#new-user-invitation-email"}},[e._v("New User Invitation")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#custom-emails"}},[e._v("Custom Emails")])])]),e._v(" "),t("h2",{attrs:{id:"forgot-password-email"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#forgot-password-email"}},[e._v("#")]),e._v(" Forgot Password Email")]),e._v(" "),t("p",[e._v("This email can be sent to users who have lost their password. If SMTP is not enabled on the server, there is "),t("RouterLink",{attrs:{to:"/FAQ/ServerSettings/#forgot-btcpay-admin-password"}},[e._v("no easy way")]),e._v(" to reset any user passwords including the server admin's password. Be sure to save your password in a safe place or setup email for your server.")],1),e._v(" "),t("h2",{attrs:{id:"new-user-confirmation-email"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-user-confirmation-email"}},[e._v("#")]),e._v(" New User Confirmation Email")]),e._v(" "),t("p",[e._v("This email is used to confirm new user account registration. In order to reduce spam account registration, email confirmation may be required by the server admin (set in server settings policies). New users can click the link in this email to verify their account to complete their registration process.")]),e._v(" "),t("h2",{attrs:{id:"new-user-invitation-email"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-user-invitation-email"}},[e._v("#")]),e._v(" New User Invitation Email")]),e._v(" "),t("p",[e._v("Send an invitation email to "),t("RouterLink",{attrs:{to:"/FAQ/ServerSettings/#how-to-add-a-new-user-by-invite"}},[e._v("invite a new user")]),e._v(" to register an account on your server. This can be used to keep server registration closed to the public but still invite new users.")],1),e._v(" "),t("h2",{attrs:{id:"custom-emails"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#custom-emails"}},[e._v("#")]),e._v(" Custom Emails")]),e._v(" "),t("p",[e._v("Custom emails can be created using the BTCPay Server Transmuter preset "),t("RouterLink",{attrs:{to:"/Transmuter/EmailReceiptsPreset/#transmuter-email-receipts-setup"}},[e._v("Email Receipts")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"email-rules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#email-rules"}},[e._v("#")]),e._v(" Email rules")]),e._v(" "),t("p",[e._v("Email rules allow BTCPay Server to send customized emails from your store based on events.\nClick the "),t("code",[e._v("Configure")]),e._v(" button and "),t("code",[e._v("create")]),e._v(" a new Email rule.")]),e._v(" "),t("p",[e._v("Set your Email trigger out of the following :")]),e._v(" "),t("ul",[t("li",[e._v("Invoice created")]),e._v(" "),t("li",[e._v("Invoice Received Payment")]),e._v(" "),t("li",[e._v("Invoice Processing")]),e._v(" "),t("li",[e._v("Invoice Expired")]),e._v(" "),t("li",[e._v("Invoice Settled")]),e._v(" "),t("li",[e._v("Invoice Invalid")]),e._v(" "),t("li",[e._v("Invoice Payment Settled")])]),e._v(" "),t("p",[e._v("Set a recipient email address where you'd want to be updated by email on store events, or tick the option for "),t("code",[e._v("Send email to the buyer if an email was provided to the invoice")]),e._v(".\nFill out a subject for the event email, and you can stylize the body of the email at last.")]),e._v(" "),t("p",[e._v("Possible placeholder's we currently offer are as follows :")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("            {Invoice.Id}\n            {Invoice.StoreId}\n            {Invoice.Price}\n            {Invoice.Currency}\n            {Invoice.Status}\n            {Invoice.OrderId}\n")])])]),t("p",[e._v("Find the source "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/blob/master/BTCPayServer/HostedServices/StoreEmailRuleProcessorSender.cs",target:"_blank",rel:"noopener noreferrer"}},[e._v("here for possible updates"),t("OutboundLink")],1)]),e._v(" "),t("figure",[t("img",{attrs:{src:a(476),alt:"Create new Email rule",title:"Create new Email rule"}})])])}),[],!1,null,null,null);t.default=s.exports}}]);