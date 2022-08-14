# favicon-gen-team-70

**IconCity**
>This is a favicon generator platform built to relieve designers and developers of the hassle they face in getting favicons.
Our Top priorities are to give users a wonderful UX and smooth favicon generation expeirience while offering other top notch features.

*Build your favicons fast and easy!!!*
# favicon-gen-team-70
**FAVICON GENERATOR by Zuri Project Team 70**
**ICONCITY**
>Iconcity is a favicon generator where an authenticated user can upload an image or type a text, generate and download favicons in all the standard sizes and formats and their respective HTML codes(parsed in a text file). Users can also save their favicons in their collections dashboard for future download.

**User System Overview**
>For Unauthenticated Users:
>- Users can view documentation
>- Users can choose to register
>- Only authenticated users can access the generating engine

>For Authenticated Users:
>- Users can upload an image or type text
>- Users can generate favicons of varying screen sizes
>- Users can save downloaded files
>- Users can choose to redownload a saved file

>Architecture
>- Adopted the monolith architecture using Django templating

>Folder Structure
>- home: App for unauthenticated users
>- dashboard: App for authenticated users
>- static: For assets and styling sheets
>- iconcity: contains project configuration

# Deploying ICONCITY (#Developers Only)
## Steps to deploy the Application on Linux-Ubuntu Server
- Use Sudo if any of the commands below output `permission denied`
- Step 1: Navigate to the directory var/www/
- Step 2: Clone the team_70 repo to the server with `sudo git clone https://github.com/zuri-training/favicon-gen-team-70.git ICONCITY` This will clone the repo into a folder named ICONCITY
- Step 3: Create a virtual environment with `python3 -m venv iconcityVENV`
- Step 4: Activate the virtual environment with `source iconcityVENV/bin/activate`
- Step 5: Install packages using `pip3 install -r requirements.txt`
- Step 6: Create a .env file with `sudo nano .env` and add the content below
>-    SECRET_KEY=django-insecure-@-)^q!&gm3m72k#gb)u8zj92$%!lzsa-wi24^s*rk4p14l^=&(
>-    DEBUG=True
- Step 7: Create a postgreSQL database (iconcity.db) and user (iconcity) with the following lines of code
>- `sudo -u postgres psql`
>- `postgres=# create database iconcity.db;`
>- `postgres=# create user iconcity with encrypted password 'iconcity123';`
>- `postgres=# grant all privileges on database iconcity.db to iconcity;`
- Step 8: Exit postgres by typing \q and pressing the enter key
- Step 9: Run the migrate command with `python3 manage.py migrate`
- Step 10: Start the server with `python3 manage.py runserver`

## Steps to deploy the Application on Windows Local Server
- Step 1: Navigate to the folder you want to deply the project
- Step 2: Clone the team_70 repo to the server with `git clone https://github.com/zuri-training/favicon-gen-team-70.git ICONCITY` This will clone the repo into a folder named ICONCITY
- Step 3: Create a virtual environment with `python -m venv iconcityVENV`
- Step 4: Activate the virtual environment with `iconcityVENV/Scripts/activate`
- Step 5: Install packages using `pip install -r requirements.txt`
- Step 6: Create a .env file with and add the content below
>-    `SECRET_KEY=django-insecure-@-)^q!&gm3m72k#gb)u8zj92$%!lzsa-wi24^s*rk4p14l^=&(`
>-    `DEBUG=True`
- Step 7: Install PostgreSQL and create a postgreSQL database (iconcity.db) and user (iconcity) with the following steps
>- Launch pgAdmin 4 
>- Click on Object, go to Create then click on Database
>- Enter the name `iconcity.db` and click ok.
>- Right click on `iconcity.db` and click on query tool
>- Paste the following on the query window `CREATE USER iconcity WITH PASSWORD 'iconcity123';`
>- Click on the execute button or press F5
- Step 8: Run the migrate command with `python3 manage.py migrate`
- Step 9: Start the server with `python3 manage.py runserver`

## Developer Contributors
- Ezeoke Chiamaka
- Jude Okoye
- Kingsley Onwubuya
- Stephanie Umenwa
- Ujah Abraham Abah
- Senanyo Benwari
- Ajayi Oluswasegun Israel
- Sarah Adu
- Jemima Ifeanyichukwu
- Byron Taaka
- Adewole Noah



>Note: All project contributors much be familiar with the [Rules of Engagement](https://docs.google.com/document/d/1D9N1TRe5wGy6t3cCa-JtPIFo-S4-cVjq1lsBvtaXHqo/edit?usp=sharing)
