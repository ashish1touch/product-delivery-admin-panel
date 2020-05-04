import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

// styles
import useStyles from './styles';

// Components
import { Button } from '../../../components/Wrappers/Wrappers';

function getModalStyle() {
  const top = 45;
  const left = 50;
  const width= 40;
  return {
    top: `${top}%`,
    left: `${left}%`,
    width: `${width}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const FormModal = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

  const { open, handleClose, title, formFields } = props;

  const form = (
    <form className={classes.root} noValidate autoComplete='off'>
      {formFields.map((field, index) => {
        return (
          <TextField
            key={index}
            style={field.style}
            type={field.type}
            label={field.label}
            defaultValue={field.defaultValue}
            multiline = {field.multiline}
          />
        );
      })}
      <Button
        color='success'
        size='medium'
        className='mt-4 px-2 btn-block'
        variant='contained'
        style = {{backgroundColor : "#536DFE"}}
      >
        {title}
      </Button>
    </form>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
    >
      <div style={modalStyle} className={classes.paper} >
        <h4>{title}</h4>
        {form}
      </div>
    </Modal>
  );
};

export default FormModal;
