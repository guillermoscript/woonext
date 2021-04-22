import Head from 'next/head';
import Header from './Header';
// import  '../styles/Style.css';
import Footer from './Footer';

function Layout(props) {
    return(
        <div>
            <Head>
                <title>Woo React</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"></link>
                
            </Head>
            <Header> </Header>
            {props.children}
            <Footer></Footer>
        </div>
    )
}

export default Layout