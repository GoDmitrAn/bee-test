import { FilterForm } from "components/FilterForm/FilterForm";
import { PageTitle } from "components/SharedLayout/SharedLayout.styled";

const Home = () => {
  return (
    <main>
      <PageTitle>Фильтр результатов</PageTitle>
      <FilterForm />
    </main>
  );
};
export default Home;
