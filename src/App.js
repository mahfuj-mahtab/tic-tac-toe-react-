import logo from './logo.svg';
import Icon from './components/icon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Card,CardBody,Container,Button,Col,Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { React,useState } from 'react';
import './App.css';

const itemArray = new Array(9).fill("empty")
function App() {
  const [isCross,setIsCross] = useState(false)
  const [winMsg,setWinMsg] = useState('')
  const reloadGame = ()=>{
    setIsCross(false)
    setWinMsg('')
    itemArray.fill("empty",0,9)
  }
  const checkIsWinner = ()=>{
    if(itemArray[0] === itemArray[1] && itemArray[0] === itemArray[2] && itemArray[0] !== 'empty'){
      setWinMsg(`${itemArray[0]} wins`)
    }
    else if(itemArray[3] === itemArray[4] && itemArray[3] === itemArray[5] && itemArray[3] !== 'empty'){
      setWinMsg(`${itemArray[3]} wins`)
    }
    else if(itemArray[6] === itemArray[7] && itemArray[6] === itemArray[8] && itemArray[6] !== 'empty'){
      setWinMsg(`${itemArray[6]} wins`)
    }
    else if(itemArray[0] === itemArray[4] && itemArray[0] === itemArray[8] && itemArray[0] !== 'empty'){
      setWinMsg(`${itemArray[0]} wins`)
    }
    else if(itemArray[2] === itemArray[4] && itemArray[2] === itemArray[6] && itemArray[2] !== 'empty'){
      setWinMsg(`${itemArray[2]} wins`)
    }
    else if(itemArray[0] === itemArray[3] && itemArray[0] === itemArray[6] && itemArray[0] !== 'empty'){
      setWinMsg(`${itemArray[0]} wins`)
    }
    else if(itemArray[1] === itemArray[4] && itemArray[1] === itemArray[7] && itemArray[1] !== 'empty'){
      setWinMsg(`${itemArray[1]} wins`)
    }
    else if(itemArray[2] === itemArray[5] && itemArray[2] === itemArray[8] && itemArray[2] !== 'empty'){
      setWinMsg(`${itemArray[2]} wins`)
    }

  }
  const changeItem = (itemNumber)=>{
    if(winMsg){
      return toast(winMsg,{type:'success'})
    }
    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? 'cross': 'circle'
      console.log(itemArray)
      setIsCross(!isCross)
    }else{
      return toast('already filled',{type:'error'})
    }
    checkIsWinner();
  
  
  }

  
  return (
<Container className='p-5'>
  <ToastContainer position='bottom-center'/>
    <Row>
      <Col md={6} className='offset-md-3'>
        {winMsg ? (
        <div className='mb-2 mt-2'>
            <h1 className="text-primary text-uppercase text-center">
              {winMsg}
            </h1>
            <Button color='success' block onClick={reloadGame}> Reload Game</Button>
        </div>
        
        ) : (
          <h1 className="text-center text-warning">
            {isCross ? ('Cross'): ('Circle')} Turns
          </h1>
        )}
        <div className='grid'>
          {
            itemArray.map((item,index)=>(
              <Card color='warning' onClick={()=>(changeItem(index))}>
                <CardBody className='box'>
                  <Icon name={item}/>
                </CardBody>
              </Card>
            )

            )
          }
        </div>
      </Col>
    </Row>

</Container>
  );
}

export default App;
