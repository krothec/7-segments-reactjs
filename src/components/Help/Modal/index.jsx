import { useContext, useState } from 'react'
import { Modal, Fade, Backdrop } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Rules } from './styles'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '500px',
    textAlign: 'justify',
  },
}))

function HelpModal(props) {
  const classes = useStyles()
  const { isOpen, changeStatus } = props

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isOpen}
      onClose={changeStatus}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <div className={classes.paper}>
          <h1>Como jogar?</h1>
          <Rules>
            1. O jogo consiste em adivinhar o número selecionado aleatoriamente
            pelo sistema.
          </Rules>
          <Rules>2. O número tem que ser inteiro e de valor máximo 300.</Rules>
          <Rules>
            3. Quando o valor digitado for o mesmo selecionado, uma mensagem de
            vitória aparecerá.
          </Rules>
          <Rules>
            4. Caso o número digitado não seja o mesmo, um aviso aparecerá e
            você terá outras novas changes.
          </Rules>
          <Rules>5. Dicas aparecerão conforme o andamento do jogo.</Rules>
          <Rules>
            6. Se o jogador digitar algo que não seja números, uma mensagem de
            erro aparecerá e o jogo se encerra.
          </Rules>
          <Rules>7. O jogo acaba assim que o número for adivinhado.</Rules>
        </div>
      </Fade>
    </Modal>
  )
}

export default HelpModal
