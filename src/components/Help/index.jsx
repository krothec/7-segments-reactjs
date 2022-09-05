import { Context } from '../../context/Context'
import { useContext, useState } from 'react'
import { Fab } from 'react-tiny-fab'
import 'react-tiny-fab/dist/styles.css'
import { Question } from 'phosphor-react'
import { Modal } from '@material-ui/core'
import HelpModal from './Modal'

function Help() {
  const [status, setStatus] = useState(false)

  function handleChange() {
    setStatus((prevStatus) => !prevStatus)
  }

  return (
    <>
      <Fab
        style={{ bottom: 24, right: 24 }}
        icon={<Question size={32} weight="light" />}
        alwaysShowTitle={true}
        onClick={() => handleChange()}
      ></Fab>
      <HelpModal isOpen={status} changeStatus={handleChange} />
    </>
  )
}

export default Help
