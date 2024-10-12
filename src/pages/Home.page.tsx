import { Container, Grid } from "@mantine/core";

//components
import { Layout } from "@/components/Layout";
import QuestionList from "@/components/questions/QuestionList";
import AnswerList from "@/components/answers/rightSide/AnswerList";
import QuestionHeader from "@/components/questions/QuestionHeader";
import AnswerHeader from "@/components/answers/rightSide/AnswerHeader";

//styles
import classes from './Home.module.scss';

export function HomePage() {
  return (
    <Layout>
      <Container fluid className={classes.mainContainer}>
        <Grid>
          <Grid.Col span={8}>
            <QuestionHeader /> 
            <QuestionList />
          </Grid.Col>
          <Grid.Col span={4}>
            <AnswerHeader />
            <AnswerList />
          </Grid.Col>
        </Grid>
      </Container>
    </Layout>
  );
}
