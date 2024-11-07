# Kaiway

Kaiway is an integrated booking platform that allows users to seamlessly book flights and trains in a single application, providing an all-in-one travel solution.

---

## Features

- **Multi-Mode Travel Integration**: Search and book combined air and rail journeys in one go.
- **Flight and Train Details**: Access comprehensive information about departure/arrival times, pricing, stops, and ticket class options.
- **Real-Time Order Processing**: After booking, receive immediate updates on payment and ticket confirmation.
- **QR Code for Easy Access**: Get a QR code for quick ticket access.
- **Enhanced User Experience**: Interactive UI with tooltips, animations, and Font Awesome icons for easy navigation.

---

## Frontend

- **React**: Modular, component-based structure.
- **State Management**: React hooks (`useState`, `useEffect`) to handle dynamic content and manage booking states.
- **Responsive Design**: CSS Flexbox and Grid, ensuring consistent layout across devices.
- **Interactive Icons**: Font Awesome for visual cues and better user engagement.
- **Context API**: Share data (e.g., booking details) across components without prop drilling.

---

## Backend (AWS)

- **AWS Lambda + API Gateway**: Serverless architecture for scalable flight and train data requests.
- **AWS EC2**: For hosting API services, handling dynamic backend operations.
- **Amazon S3**: Stores static assets (images, CSS, JavaScript), enabling fast, reliable access.
- **Amazon RDS**: Manages relational data like bookings and user details with automatic backups.

---

## How to Use

1. **Search**: Enter your origin, destination, and date.
2. **Select Journey**: Review available flights and train options.
3. **Book**: Complete the booking, view details, and receive a QR code.
4. **Check Status**: Track booking and payment status with real-time updates.

---

# Guide to Installing and Configuring Certificates on Windows

This document provides step-by-step instructions for installing a `.crt` file and launching Chrome with certificate error bypass for development purposes.

## Launching Chrome with Certificate Error Bypass

To run Chrome with the `--ignore-certificate-errors` flag, follow the instructions below based on your system version.

### Instructions for 64-bit Windows

1. Open **PowerShell**.
2. Run the following command:
   ```powershell
   & "C:\Program Files\Google\Chrome\Application\chrome.exe" --ignore-certificate-errors

###  Instructions for 32-bit Windows
1. Open PowerShell.
2. Run this command:
    ```powershell
    & "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --ignore-certificate-errors

# Installing `mycert.crt` File on Windows

Follow these steps to install a `.crt` file and add it to the trusted root certification authorities:

## Step 1: Open the `.crt` File
- Locate the downloaded `mycert.crt` file on your computer.
- Double-click the file to open it.

## Step 2: Install the Certificate
- In the certificate dialog that appears, click **"Install Certificate"**.

## Step 3: Select Certificate Store Location
- Choose **"Local Machine"** and click **"Next"**.
- Select **"Place all certificates in the following store"**.
- Click **"Browse"** and choose **"Trusted Root Certification Authorities"**.
- Click **"OK"** to confirm your selection.

## Step 4: Complete the Installation
- Click **"Next"**, and then **"Finish"** to complete the installation.
- A confirmation message should appear, indicating that the certificate was successfully installed.

## Step 5: Restart the Browser
- Close all instances of Chrome.
- Reopen Chrome to ensure that the new certificate settings are applied.



## Tech Stack

- **Frontend**: React, CSS, Font Awesome
- **Backend**: AWS (Lambda, EC2, S3, RDS)

---

## Future Enhancements

- **User Account Management**: Personalized profiles, saved trips.
- **Enhanced Analytics**: Predictive journey suggestions based on user preferences.

---

Kaiway simplifies multi-mode travel booking, making it a unified and efficient experience for travelers.
