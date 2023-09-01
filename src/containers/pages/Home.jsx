import Header from '../../components/Header.jsx'
import Table from '../../components/Table.jsx'
import Footer from '../../components/Footer.jsx'
import Crud from '../../components/Crud.jsx'

function Home(){
    return(
        <div>
            <Header></Header>
            <Table></Table>
            {/* <Crud></Crud> */}
            <Footer></Footer>
        </div>
    )
}

export default Home