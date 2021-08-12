# FrontendDev Homework (Day 1)
![Homework Day 1](images/homework-day1.png)


# Dockerised the my-react-app

To enable you to view my-react-app, I have dockerised it and pushed up to my docker repo.

Please pull my docker container with the command below and view it at http://localhost:3000

```bash
docker run -d -p 3000:80 james1122/react-hw-day1
```

# Completed

## CareerForm component (80% done)
reference: https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react

see the following files:
* src/pages/career.jsx
* src/components/career-item.jsx


### Help needed.
I have problem in binding the formData.summary (text-area). Somehow the handleChange function is not working on text-area changes.

## removeJob function (done)

## updateJob function (partially done)
Managed to pass the index of the CareerItems component into the updateJob function. 
