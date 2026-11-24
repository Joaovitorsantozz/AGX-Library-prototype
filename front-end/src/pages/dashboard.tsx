import "../index.css";
import BookCatalog from "../components/dashboard/bookCatalog";
import Sidebar from "../components/dashboard/sideBar";
import StatCard from "../components/dashboard/statCard";

function Dashboard() {
  return (
    <main className="dashboardLayout">
      <Sidebar />

      <section className="dashboardMain">
        <header className="dashboardHeader">
          <div>
            <h1>Dashboard e Catálogo</h1>
            <p>Visão geral do acervo e consulta rápida de livros.</p>
          </div>

         
        </header>

        <section className="statsGrid">
        

          <StatCard
            title="Livros disponíveis"
            value={128}
            description="Prontos para empréstimo"
            
            variant="green"
          />

          <StatCard
            title="Livros emprestados"
            value={14}
            description="Em circulação ativa"
           
            variant="orange"
          />
        </section>

        <BookCatalog />
      </section>
    </main>
  );
}

export default Dashboard;
