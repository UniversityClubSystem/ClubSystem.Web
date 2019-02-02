import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import axios from 'axios';

import styles from './new-club.module.css';

const NewClub = (props) => {
  const [name, setName] = useState('');
  const [universityName, setUniversityName] = useState('');
  const universityNames = [{ id: 1, name: 'Kocaeli University' }, { id: 2, name: 'Bogazici University' }];
  const token = localStorage.getItem('token');

  function handleSave() {
    axios
      .post(
        '/api/club',
        { name, universityName },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        props.history.push('/clubs');
      });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form className={styles.form}>
            <p className={styles.title}>New Club</p>
            <TextField
              className={styles.clubName}
              id="title"
              label="Club Name"
              variant="outlined"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              margin="normal"
            />
            <FormControl className={styles.universityFormControl}>
              <InputLabel htmlFor="university">University</InputLabel>
              <Select
                className={styles.university}
                value={universityName}
                onChange={event => setUniversityName(event.target.value)}
                inputProps={{
                  name: 'university',
                  id: 'university',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {universityNames.map(_university => (
                  <MenuItem
                    key={_university.id}
                    value={_university.name}>
                    {/* TODO: üniversite bilgileri api'den alınacak şekilde ayarlandıktan sonra value={_university.id} şeklinde düzeltilmeli */}
                    {_university.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              className={styles.button}
              variant="contained"
              color="primary"
              onClick={handleSave}
            >
              Save Club
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewClub;
