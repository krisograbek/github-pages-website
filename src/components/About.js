import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import ContentSectionTitle from './ContentSectionTitle'


const useStyles = makeStyles((theme) => ({
  link: {
    // fontSize: 14,
    "&:hover": {
      color: theme.palette.primary.main,
    }
  },
  paragraph: {
    // width: '90%',
    padding: '0 0 16px',
    [theme.breakpoints.down('lg')]: {
      // textAlign: "center",
      padding: '32px 0 0',
    },
  },
}))


function AboutParagraph(props) {
  return (
    <Grid item
      pb={{ md: 0, lg: 2, xl: 3 }}
      pt={{ xs: 2, md: 3, lg: 0 }}
    >
      {props.children}
    </Grid>
  )
}

function AboutContentList(props) {
  return (
    <Typography pl={{ xs: 1, md: 2 }}>
      {props.children}
    </Typography>
  )
}


function MyStory() {
  return (
    <Grid container>
      <Grid item xs={12} lg={6} textAlign="center">
        <Box
          component="img"
          sx={{
            width: '100%',
            aspectRatio: 'auto',
          }}
          alt="My image"
          src="images/meGray.JPG"
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Grid container direction="column" justifyContent="flex-start"
          pl={{ md: 0, lg: 3 }}
        >
          <AboutParagraph>
            <Typography>
              Welcome. My name is
              <Typography variant="spanBold"> Kris Ograbek</Typography>.
              OK, my real name is Krzysztof but people get very creative when it comes to misspelling it.
              So, feel free to call me Kris.
            </Typography>
          </AboutParagraph>
          <AboutParagraph>
            <Typography>
              I'm a
              <Typography variant="span" color="text.secondary"> self-taught Machine Learning Engineer</Typography>.
            </Typography>
            <Typography>
              In 2008, I failed programming classes and dropped out of college.
            </Typography>
            <Typography>
              In 2021, I get to experience the mystical "flow" state while coding.
            </Typography>
          </AboutParagraph>
          <AboutParagraph>
            <Typography>
              In my 20's, learning was my unpleasant duty.
            </Typography>
            <Typography>
              In my 30's, I discovered my passion for learning.
            </Typography>
          </AboutParagraph>
          <AboutParagraph>
            <Typography>
              At the age of 32, I finally found my purpose. I want to learn and grow every day.
            </Typography>
            <Typography>
              I'm on the best journey of my life, the one that never ends.
              <Typography variant="span" color="text.secondary"> Lifelong Learning</Typography>.
              Join me!
            </Typography>
          </AboutParagraph>
        </Grid>
      </Grid>
    </Grid>
  )
}

function MyPromise() {
  const classes = useStyles();
  return (
    <Grid item xs={12} pt={4}>
      <Grid container direction="column" justifyContent="center">
        <Grid item borderLeft={4} mb={{ xs: 0, lg: 4 }} py={1}>
          <Grid container >
            <Grid item xs={12}>
              <Typography variant="h5" color="text.secondary" pl={3} sx={{ fontStyle: 'italic' }}>
                "Success is a journey, not a destination"
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" pt={2} pl={3}>
                - Arthur Ashe -
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <AboutParagraph>
          <Typography variant="h5">
            What will you find here?
          </Typography>
        </AboutParagraph>
        <AboutParagraph>
          <Typography>
            You will find Machine Learning Projects created using
            <Typography variant="span" color="text.secondary"> Python </Typography>
            libraries for:
          </Typography>
          <AboutContentList>
            - traditional<Typography variant="spanBold"> Machine Learning</Typography>:
            <Typography variant="span" color="text.secondary"> Scikit Learn and Numpy</Typography>,
          </AboutContentList>
          <AboutContentList>
            - <Typography variant="spanBold"> Deep Learning</Typography>:
            <Typography variant="span" color="text.secondary"> TensorFlow and Pytorch</Typography>,
          </AboutContentList>
          <AboutContentList>
            - <Typography variant="spanBold"> NLP</Typography>:
            <Typography variant="span" color="text.secondary"> Huggingface, SpaCy, Gensim, and NLTK</Typography>.
          </AboutContentList>
        </AboutParagraph>
        <AboutParagraph>
          <Typography>
            You'll learn how to:
          </Typography>
          <AboutContentList >
            - build
            <Typography variant="span" color="text.secondary"> flask APIs
            </Typography> to deploy models
          </AboutContentList>
          <AboutContentList>
            - create Web Applications using
            <Typography variant="span" color="text.secondary"> JavaScript and React </Typography>
            for better interaction with models,
          </AboutContentList>
          <AboutContentList>
            - deploy models globally with
            <Typography variant="span" color="text.secondary"> Heroku</Typography>.
          </AboutContentList>
        </AboutParagraph>
        <AboutParagraph>
          <Typography>
            This website is the heart of my content creation.
            Every time I'll publish something new on
            <Link href="https://medium.com/@kris-ograbek-nlp"
              underline="hover"
              className={classes.link}
              target="_blank"
              rel="noreferrer"
            > Medium
            </Link> or YouTube, this site will update. Every time I'll finish a noteworthy project on
            <Link href="https://github.com/krisograbek"
              underline="hover"
              className={classes.link}
              target="_blank"
              rel="noreferrer"
            > Github
            </Link> or deploy a Machine Learning Project, you'll find it here.
          </Typography>
        </AboutParagraph>
      </Grid>
    </Grid >
  )
}

function About() {
  return (
    <Grid
      id="about"
      container
      direction="column"
      pt={{ xs: 10, md: 15, lg: 20 }}
    >
      <ContentSectionTitle title="About me" />
      <Grid item pt={4}>
        <Grid container>
          <MyStory />
          <MyPromise />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default About
