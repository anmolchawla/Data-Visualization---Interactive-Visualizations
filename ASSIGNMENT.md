# INF 554 Assignment 5

## Description 
Assignment 5. From [http://data.worldbank.org](http://data.worldbank.org) download Rural population (% of total population) for 20 countries and a year of your choice. In an HTML document, load the data as CSV then using D3 present the data in a table, then draw a stem-and-leaf plot, a bar chart and a scatterplot of the data. Axes are not required. You can demonstrated good development practices in README.md with explanations on the set-up and how you deployed and a screenshot of your local development environment running the page. Publish using your SCF account (see instructions below) and add link to the page in README.md.

## Rubric

| 	            | Table  | Scatterplot / Bar chart / Stem-and-leaf plot  | Development & Published Page |
| ------------- | ------ | --------------------------------------------- | ---------------------------- |
| Sophisticated | Table is well formatted and well presented, supports well visual comparison, uses D3 data join, data is well formatted, imported as CSV or JSON (4-5 pts) | Chart is well formatted, uses D3 data join, data is well formatted, imported as CSV or JSON (4-5 pts per chart) | Use of GIT, developent set-up is well demonstrated and documented, page is well formatted with a proper layout and explanatory text (4-5 pts) | 
| Competent     | Table not well formatted, not well presented, support for visual comparison can be improved, improper use of D3 data join, data is not well formatted, not imported in CSV or JSON (2-3 pts) | Chart not well formatted, improper use of D3 data join, data not well formatted, not imported as CSV or JSON (2-3 pts per chart) | Use of GIT, developent set-up is not well demonstrated, documented, page is not well formatted with proper layout or explanatory text (2-3 pts) |
| Needs work    | Table is not formatted or not presented, do not support visual comparison, do not use D3 data join, data is not formatted, not imported as CSV or JSON (0-1 pts) | Chart is not formatted, do not use D3 data join, data is not formatted, not imported as CSV or JSON (0-1 pts per chart) | Use of GIT, developent set-up is not demonstrated or documented, page is not formatted with proper layout or explanatory text (0-1 pts) |


## Publishing Instructions 

All USC students are eligible for UNIX Computing Accounts for Students (SCF) accounts. Students that need to access USC UNIX resources may do so using their Student Computing Facility (SCF) accounts. Located at aludra.usc.edu and nunki.usc.edu, these two servers act as time-sharing hosts for all student accounts. See the [SCF]https://itservices.usc.edu/scf/) page for more details.

You can publish your work in one of several ways:

- Remote login using [SSH](https://itservices.usc.edu/ssh) and or use scp from a Unix terminal (use [Putty](http://www.putty.org) on Windows, also available on the [ITS software pages](https://itservices.usc.edu/software/).
- Connect with [SFTP](https://itservices.usc.edu/sftp) (secure FTP) with a client such as [Filezilla](https://filezilla-project.org).

__SSH Example__
```
$ ssh <username>@aludra.usc.edu  #username is your USC username as it appears in your usc email address
$ mkdir public_html  # automatically mapped by Apache to http://www-scf.usc.edu/~username
$ cd public_html
$ cat > index.html  # paste what follows into index.html; after paste command type Ctrl+D
<html>
   <head>
       <title>HTML Page Template</title>
   </head>
   <body>
       Hello!
   </body>
</html>
$ chmod -R 755 public_html  # make readable by www user for Apache to access 
```

You should be able to see the page by going to: http://www-scf.usc.edu/~username

### References
* http://www.putty.org
* https://itservices.usc.edu/scf/
* https://www.youtube.com/watch?v=yfDDw4v0bzY
* https://filezilla-project.org

## Homework Guidelines
- Homework repository must be updated before the start of next class
- Late policy applies (10% of total available points per each 24-hour period late; duration less than 24 hours counts as a full period)
- Homework is expected to work in: SAFARI AND CHROME (Mac), IE AND CHROME (Windows)
