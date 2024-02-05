import React from 'react';

function UserProfile() {
  return (
    <div className='Form'>
      <div className="Form-box">
        <form>
          <div className="input-box">
            <label htmlFor="name">Username</label>
            <input type="text" placeholder='Ramesh' className='Form-username' />
          </div>
          <div className="input-box">
            <label htmlFor='email'>Email</label>
            <input type="email" placeholder='Email' />
          </div>
          <div className="input-box">
            <label htmlFor='description'>Description</label>
            <textarea placeholder="Enter your description here" cols="30" rows="10"></textarea>
          </div>
          {/* we can add a button for form submission if needed */}
          <div className="input-box">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;
