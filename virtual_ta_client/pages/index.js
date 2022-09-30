import HomePage from '../components/HomePage';
import WelcomeAppBar from '../components/AppBar';
import Form from '../components/Form';

export default function Home() {
  
  return (
    <div className='main'>
      <WelcomeAppBar/>
      <Form />
      {/* <HomePage sx={{zIndex:0}}/> */}
      
    </div>
  )
}
