# INF 554 Assignment 5

## Description 
Assignment 5. From [http://data.worldbank.org](http://data.worldbank.org) download Rural population (% of total population) for 20 countries and a year of your choice. In an HTML document, load the data as CSV then using D3 present the data in a table, then draw a stem-and-leaf plot, a bar chart and a scatterplot of the data. Axes are not required. You can demonstrated good development practices in README.md with explanations on the set-up and how you deployed and a screenshot of your local development environment running the page. Publish using your SCF account and add link to the page in README.md.

## Rubric

| 	            | Data & Dev	| Table	| Stem-and-leaf plot | Bar chart | Scatterplot | Published Page |
| ------------- | ----------- | ----- | ------------------ | --------- | ----------- | -------------- |
| Sophisticated	| Data was carefully chosen and formatted, good development practices were demonstrated and documented (4-5 pts) | Table is well formatted and presents the data to support visual comparison (4-5 pts) | Stem-and-leaf is well formatted and coded with D3 data join (4-5 pts) | Bar chart is well formatted and coded with D3 data join (4-5 pts) | Scatterplot is well formatted and coded with D3 data join (4-5 pts) | Page is well formatted with a proper layout and text that explains the data (4-5 pts) |
| Competent	    | Data was carefully chosen and formatted, good development practices were demonstrated and documented (2-3 pts) | (2-3 pts) | (2-3 pts) | (2-3 pts) | (2-3 pts) |
| Needs work	  | (0-1 pts) | (0-1 pts) | (0-1 pts) | (0-1 pts) | (0-1 pts) |


## Homework Guidelines
- Homework repository must be updated before the start of the next course. 
- Homework is expected to work in: SAFARI AND CHROME (Mac), IE AND CHROME (Windows).

## Publishing on SCF 

### UNIX Computing Accounts for Students (SCF)

All USC students are eligible for SCF accounts. Students that need to access USC UNIX resources may do so using their Student Computing Facility (SCF) accounts. Located at aludra.usc.edu and nunki.usc.edu, these two servers act as time-sharing hosts for all student accounts. See the [SCF]https://itservices.usc.edu/scf/) page for more details.

You can publish your work in one of several ways on your aludra account:

- Remote login using [SSH](https://itservices.usc.edu/ssh) and or use scp from a Unix terminal (use [Putty](http://www.putty.org) on Windows, also available on the [ITS software pages](https://itservices.usc.edu/software/).
- Connect with [SFTP](https://itservices.usc.edu/sftp) (secure FTP) with a client such as [Filezilla](https://filezilla-project.org).

__Example connecting with ssh__
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

