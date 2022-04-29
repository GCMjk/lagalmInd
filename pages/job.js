import styled from 'styled-components'
import Layout from '../components/Layout'
import Vacant from '../components/Vacant'

const Job = ({res}) => {

  return (
    <Layout page='Bolsa de trabajo'>
      <h1>Bolsa de trabajo</h1>
      <JobContainer>
        {res.map(res => (
          <Vacant
            key={res.id}
            vacant={res}
          />
        ))}
      </JobContainer>
    </Layout>
  );
};

export async function getServerSideProps() {
  
  const url = 'http://localhost:1337/vacants';
  const result = await fetch(url);
  const res = await result.json()
  
  return {
    props: {
      res
    }
  }
}

export const JobContainer = styled.div`
  display: grid;
  gap: 5rem;
  padding: 0 5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    padding: 0 3rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 0 2rem;
  }
`;

export default Job;