# capstone
% Options for packages loaded elsewhere
\PassOptionsToPackage{unicode}{hyperref}
\PassOptionsToPackage{hyphens}{url}
%
\documentclass[
]{article}
\usepackage{amsmath,amssymb}
\usepackage{lmodern}
\usepackage{iftex}
\ifPDFTeX
  \usepackage[T1]{fontenc}
  \usepackage[utf8]{inputenc}
  \usepackage{textcomp} % provide euro and other symbols
\else % if luatex or xetex
  \usepackage{unicode-math}
  \defaultfontfeatures{Scale=MatchLowercase}
  \defaultfontfeatures[\rmfamily]{Ligatures=TeX,Scale=1}
\fi
% Use upquote if available, for straight quotes in verbatim environments
\IfFileExists{upquote.sty}{\usepackage{upquote}}{}
\IfFileExists{microtype.sty}{% use microtype if available
  \usepackage[]{microtype}
  \UseMicrotypeSet[protrusion]{basicmath} % disable protrusion for tt fonts
}{}
\makeatletter
\@ifundefined{KOMAClassName}{% if non-KOMA class
  \IfFileExists{parskip.sty}{%
    \usepackage{parskip}
  }{% else
    \setlength{\parindent}{0pt}
    \setlength{\parskip}{6pt plus 2pt minus 1pt}}
}{% if KOMA class
  \KOMAoptions{parskip=half}}
\makeatother
\usepackage{xcolor}
\IfFileExists{xurl.sty}{\usepackage{xurl}}{} % add URL line breaks if available
\IfFileExists{bookmark.sty}{\usepackage{bookmark}}{\usepackage{hyperref}}
\hypersetup{
  hidelinks,
  pdfcreator={LaTeX via pandoc}}
\urlstyle{same} % disable monospaced font for URLs
\setlength{\emergencystretch}{3em} % prevent overfull lines
\providecommand{\tightlist}{%
  \setlength{\itemsep}{0pt}\setlength{\parskip}{0pt}}
\setcounter{secnumdepth}{-\maxdimen} % remove section numbering
\ifLuaTeX
  \usepackage{selnolig}  % disable illegal ligatures
\fi

\author{}
\date{}

\begin{document}

\textbf{\underline{FarmBuddy - Documentation}}

Folder Structure:

Capstone-\textbar{}

\begin{quote}
-\textbar- views -\textbar{}

-\textbar- index.ejs

-\textbar- login.ejs

-\textbar- register.ejs

-\textbar- settings.ejs

-\textbar- .env

-\textbar-Crop\_recommendation.csv

-\textbar-dataBaseValueSimulator.py

-\textbar-package-lock.json

-\textbar-package.json

-\textbar-passport-config.js

-\textbar-server.js
\end{quote}

-\textbar- main.py

\begin{itemize}
\item
  Framework used:
\end{itemize}

\begin{itemize}
\item
  \begin{quote}
  Node js
  \end{quote}
\item
  \begin{quote}
  Express js
  \end{quote}
\item
  \begin{quote}
  Flask
  \end{quote}
\end{itemize}

\begin{itemize}
\item
  Libraries used in node app:
\end{itemize}

\begin{itemize}
\item
  \begin{quote}
  bcrypt
  \end{quote}
\item
  \begin{quote}
  passport
  \end{quote}
\item
  \begin{quote}
  express-flash
  \end{quote}
\item
  \begin{quote}
  express-session
  \end{quote}
\item
  \begin{quote}
  method-override
  \end{quote}
\item
  \begin{quote}
  firebase
  \end{quote}
\item
  \begin{quote}
  request
  \end{quote}
\item
  \begin{quote}
  open weather map
  \end{quote}
\end{itemize}

\begin{itemize}
\item
  Libraries used in flask app:
\end{itemize}

\begin{itemize}
\item
  \begin{quote}
  pandas
  \end{quote}
\item
  \begin{quote}
  sklearn
  \end{quote}
\item
  \begin{quote}
  request
  \end{quote}
\end{itemize}

\begin{itemize}
\item
  main.py:
\end{itemize}

\begin{itemize}
\item
  \begin{quote}
  Pandas, flask and sklearn libraries are imported.
  \end{quote}
\item
  \begin{quote}
  dataset is read from the storage.
  \end{quote}
\item
  \begin{quote}
  features and target is declared
  \end{quote}
\item
  \begin{quote}
  dataset is split into training and testing dataset
  \end{quote}
\item
  \begin{quote}
  RF classifier is declared and trained
  \end{quote}
\item
  \begin{quote}
  Accuracy score is calculated
  \end{quote}
\item
  \begin{quote}
  Flask app is created
  \end{quote}
\item
  \begin{quote}
  Declaring route for API call that receives a JSON object as a
  parameter in the form of an HTTP request
  \end{quote}
\item
  \begin{quote}
  First the argument is extracted and converted into an array
  \end{quote}
\item
  \begin{quote}
  Then it is passed through the classifier and the recommended is
  returned with a 200 response code
  \end{quote}
\item
  \begin{quote}
  App runs on Port 5000
  \end{quote}
\end{itemize}

\begin{itemize}
\item
  server.js: This is the entry point for the application. All the views
  are rendered and redirected using this file. This code can be divided
  into four modules:
\end{itemize}

\begin{itemize}
\item
  \begin{quote}
  Authentication
  \end{quote}
\item
  \begin{quote}
  Open Weather API
  \end{quote}
\item
  \begin{quote}
  Random forest classifier
  \end{quote}
\item
  \begin{quote}
  Firebase Real-time Database
  \end{quote}
\end{itemize}

\begin{itemize}
\item
  Authentication Module:
\end{itemize}

\begin{itemize}
\item
  \begin{quote}
  Authentication module utilizes the bcrypt, passport, session and flash
  library to create a login and register page in which the user is
  required to provide his/her name, email and password. Which is then
  stored in the app.
  \end{quote}
\item
  \begin{quote}
  Upon logging in the user is taken to the settings page where he/she
  has to enter the factors for their field
  \end{quote}
\item
  \begin{quote}
  Upon successful completion of the forms the user is redirected to the
  dashboard where they are allowed to monitor their field data in real
  time.
  \end{quote}
\end{itemize}

\begin{itemize}
\item
  Open Weather API:
\end{itemize}

\begin{itemize}
\item
  \begin{quote}
  An API key and city is declared, using which a URL is generated
  \end{quote}
\item
  \begin{quote}
  This URL is used to send an HTTP request which returns a JSON object
  \end{quote}
\item
  \begin{quote}
  JSON object is used to collect the temperature, humidity and pressure
  of the location and passed as a response variable to display on the
  dashboard.
  \end{quote}
\end{itemize}

\begin{itemize}
\item
  Random Forest Classifier:
\end{itemize}

\begin{itemize}
\item
  \begin{quote}
  This part of the code sends an HTTP request to the flask app by
  encoding the parameters in an URL
  \end{quote}
\end{itemize}

\begin{itemize}
\item
  \begin{quote}
  Once the user submits the settings form this HTTP request is sent in
  which all the seven factors are encoded in the URL
  \end{quote}
\item
  \begin{quote}
  The flask server evaluates the request and returns a suitable crop for
  the user.
  \end{quote}
\item
  \begin{quote}
  This crop is logged and user is redirected to the dashboard.
  \end{quote}
\end{itemize}

\begin{itemize}
\item
  Firebase Real-time Database:
\end{itemize}

\begin{itemize}
\item
  \begin{quote}
  An app is created in the Firebase console on
  (https://console.firebase.google.com/).
  \end{quote}
\item
  \begin{quote}
  Which generates a configuration JSON object that is used to register
  the web app to the database.
  \end{quote}
\item
  \begin{quote}
  Using firebase.initializeApp and the firebase configuration object and
  instance of the firebase app is created which is then later used to
  fetch data from the database.
  \end{quote}

  Use of other Files:
\end{itemize}

\begin{itemize}
\item
  Package.json : it records important metadata about the project
\item
  package-lock.json: to keep track of the exact version of every package
  that is installed so that a product is 100\% reproducible in the same
  way even if packages are updated by their maintainers
\item
  passport-config.js: Declares basic functionality of the passport and
  defines the function that initializes the passport instance.
\item
  dataBaseValueSimulator.py: Artificially simulates the values various
  sensors will generate and uploads them to the database.

  \textbf{\underline{Views/ login.ejs:}}

  This is a view created using embedded JS which allows us to
  dynamically generate web pages.

  This is the page you will be taken to first when visiting the web app.

  The CSS styles used for this page is coded using internal CSS. A form
  is created which takes the email and password from user to login and
  displays a link which will take the user to the registration page in
  case they don't have an account.

  Upon logging in the user is redirected to the

  \textbf{\underline{Views/ register.ejs:}}

  The CSS styles used for this page is coded using internal CSS. A form
  is created which requires the name, email and password from the user,
  upon submission the user will be created and they will be redirected
  to the login page. A hyperlink to the login page is provided in case
  the user already has an account.

  \textbf{\underline{Views/ settings.ejs}}

  The CSS styles used for this page is coded using internal CSS. A form
  is created which requires the user to input seven factors that are
  required to predict an ideal crop. Upon submission the HTTP call is
  made to the flask server and the user is redirected to the index.ejs
  page.

  \textbf{\underline{Views/ index.ejs}}

  This is the Dashboard of the application. The CSS styles are done
  internally and JS code for firebase is written internally so the calls
  can be made in front-end without utilizing server resources. Because
  firebase provides Back-end as a Service.

  Using the Open Weather API calls the web-page displays the
  temperature, humidity and pressure of the location. using the firebase
  app and snapshot method the twenty latest values of N, P, K and pH are
  extracted from the database and plotted on four separate graphs using
  charts.js

  Logout option and an option to change the settings is also available
  in the far top-right corner of the page.
\end{itemize}

\end{document}
  request
