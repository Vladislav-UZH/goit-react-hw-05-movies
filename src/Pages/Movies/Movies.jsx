import { Container } from 'components/App/App.styled';

export const Movies = () => {
  return (
    <main>
      <Container>
        <form>
          <label>
            <input type="text" />
          </label>

          <button>Search</button>
        </form>
      </Container>
    </main>
  );
};
