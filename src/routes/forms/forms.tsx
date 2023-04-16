import React from 'react';
import { CountryEnum } from '../../enums/country.enum';
import Card from '../home/Card/card';
import { initialState } from './initialState';
import { FieldValues, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addCard, hidePopup } from '../../store/formSlice';
import { CharacterInterface } from '../../interfaces/character.interface';
import { useAppSelector } from '../../store';
const firstLetterValidator = (value: string): boolean => /[A-Z]/.test(value[0]);

const UserForm = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const data: CharacterInterface[] = useAppSelector((state) => state.form.cards);
  const isShowPopup: boolean = useAppSelector((state) => state.form.isShowPopup);
  const dispatch = useDispatch();
  const onSubmit = (formState: FieldValues) => {
    const character: CharacterInterface = {
      birthday: formState.birthday,
      location: formState.country,
      gender: formState.gender,
      id: `${Math.random() * 10000}`,
      status: formState.status,
      name: formState.name + ' ' + formState.surname,
      image: URL.createObjectURL(formState.photo[0]),
      species: 'Human',
      type: '',
    };
    dispatch(addCard({ character }));
    reset();
    setTimeout(() => {
      dispatch(hidePopup());
    }, 3000);
  };
  return (
    <div>
      <div
        style={{
          padding: '20px',
          border: '1px solid red',
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '250px',
              margin: '30px',
            }}
          >
            <label>{`${initialState.name.label}:`}</label>
            <input
              {...register('name', {
                required: true,
                validate: firstLetterValidator,
              })}
              type={initialState.name.type}
            />
            {errors['name'] ? (
              <div style={{ color: 'red' }}>{initialState.name.errorMessage || ''}</div>
            ) : null}
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '250px',
              margin: '30px',
            }}
          >
            <label>{`${initialState.surname.label}:`}</label>
            <input
              {...register('surname', {
                required: true,
                validate: firstLetterValidator,
              })}
              type={initialState.surname.type}
            />
            {errors['surname'] ? (
              <div style={{ color: 'red' }}>{initialState.surname.errorMessage || ''}</div>
            ) : null}
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '250px',
              margin: '30px',
            }}
          >
            <label>{`${initialState.birthday.label}:`}</label>
            <input
              {...register('birthday', { required: true })}
              type={initialState.birthday.type}
            />
            {errors['birthday'] ? (
              <div style={{ color: 'red' }}>{initialState.birthday.errorMessage || ''}</div>
            ) : null}
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '250px',
              margin: '30px',
            }}
          >
            <label>{`${initialState.country.label}:`}</label>
            <select {...register('country', { required: true })}>
              {initialState.country.options.map((label: CountryEnum, index: number) => {
                return (
                  <option value={label} key={label + index}>
                    {label}
                  </option>
                );
              })}
            </select>
            {errors['country'] ? (
              <div style={{ color: 'red' }}>{initialState.country.errorMessage || ''}</div>
            ) : null}
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '250px',
              margin: '30px',
            }}
          >
            <label>Gender:</label>
            {initialState.gender.label.map((item: string, idx: number) => (
              <div key={`${Math.random()}idx`}>
                <input
                  {...register('gender', { required: true })}
                  type={initialState.gender.type}
                  id={initialState.gender.label[idx]}
                  value={initialState.gender.label[idx]}
                />
                <label htmlFor={initialState.gender.label[idx]}>
                  {initialState.gender.label[idx]}
                </label>
              </div>
            ))}
            {errors['gender'] ? (
              <span style={{ color: 'red' }}>{initialState.gender.errorMessage || ''}</span>
            ) : null}
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '250px',
              margin: '30px',
            }}
          >
            <label>{`${initialState.status.label}:`}</label>
            <input {...register('status', { required: true })} type={initialState.status.type} />
            {errors['status'] ? (
              <div style={{ color: 'red' }}>{initialState.status.errorMessage || ''}</div>
            ) : null}
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '250px',
              margin: '30px',
            }}
          >
            <label>{`${initialState.photo.label}:`}</label>
            <input type="file" {...register('photo', { required: true })} />
            {errors['photo'] ? (
              <div style={{ color: 'red' }}>{initialState.photo.errorMessage || ''}</div>
            ) : null}
          </div>

          <button type="submit">Submit</button>
        </form>
        {isShowPopup ? (
          <h2
            style={{
              border: '2px solid green',
            }}
          >
            Card was created
          </h2>
        ) : null}
      </div>
      <div
        style={{
          display: 'flex',
          padding: '20px',
          gap: '10px',
          flexWrap: 'wrap',
          border: '1px solid red',
        }}
      >
        {data.map((card: CharacterInterface) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default UserForm;
