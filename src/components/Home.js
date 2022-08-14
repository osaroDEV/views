import React from 'react';
import { FaSuitcase, FaPencilAlt, FaKey, FaAddressCard, FaWhatsappSquare, FaFacebook, FaTwitter } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <h1 className='head'>Need More Viewers For Your WhatsApp Status?</h1>
      <hr className='line' />
      <section className='about'>
        <p>
          You can now grow your WhatsApp Audience and Views as You and other
          participants get to save each others contact in just one click
        </p>
        <button>Download</button>
        <button>Submit entry</button>
      </section>
      {/* <section > */}
      <table
      // className='tab'
      >
        <tr className='table-head'>
          <th>Benefits</th>
        </tr>
        <tr>
          <ul>
            <li>More popularity = More money</li>
            <li>More interesting statuses to view</li>
            <li>More sales for business owners</li>
            <li>More people get to know about you and your business</li>
            <li>If you're self employed, you can have better opportunities</li>
            <li>Helps you discover new sources of income</li>
            <li>Helps you find more interesting people like you</li>
          </ul>
        </tr>
      </table>
      {/* </section> */}
      <section>
        <h2>Go Premium</h2>
        <table className='table'>
          <tr>
            <th>Free</th>
            <th>Premium</th>
          </tr>
          <tr>
            <td>Name: Maximum of 8 characters</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td>For personal use</td>
            <td>
              For Businesses, WhatsApp Media or TVs, Brands, Personalities etc
            </td>
          </tr>
          <tr>
            <td>Totally free</td>
            <td>You have to pay a token of ₦200 only</td>
          </tr>
          <tr>
            <td>
              All Contacts are automatically saved with a "WV" suffix eg:
              Clinton WV
            </td>
            <td>
              Premium plan allows spaced names and the suffix eg: Clinton Stores
              WV
            </td>
          </tr>
        </table>
      </section>
      <section>
        <h1>Procedures</h1>
        <div className='mini-box'>
        <div className='wrap'>
          <FaSuitcase className='proc-icon' />
          <h3 className='proc-title'>Select Plan</h3>
          <p className='box-para'>
            Choose between the free plan and the premium plan according to what
            best suits your needs. Remember that the premium plan has more to
            offer
          </p>
        </div>
        </div>
        <div className='mini-box'>
        <div className='wrap'>
          <FaPencilAlt className='proc-icon' />
          <h3 className='proc-title'>Fill in correct information</h3>
          <p className='box-para'>
            Fill in your correct information when submitting your contact
            information to ensure that you get the best out of our services
          </p>
          </div>
        </div>
        <div className='mini-box'>
        <div className='wrap'>
          <FaKey className='proc-icon' />
          <h3 className='proc-title'>Secure Your Password</h3>
          <p className='box-para'>
            After your successful payment, you will be given a unique password
            which will be required to download the contact file
          </p>
          </div>
        </div>
        <div className='mini-box'>
        <div className='wrap'>
          <FaAddressCard className='proc-icon' />
          <h3 className='proc-title'>Download Compiled Contracts</h3>
          <p className='box-para'>
            Come back to Download and install the contact file which will be
            uploaded by 9:00pm in a .vcf format. This contact file will also be
            saved by others
          </p>
          </div>
        </div>
      </section>
      <section className='mini-box'>
        <div className='wrap'> 
        <h2>Submit your name and number</h2>
        <p>
          Submit your name and number to be compiled for download by yourself
          and others
        </p>
        <form className='form'>
          <div>
            <label htmlFor='f' className='label'>
              Package Type:
            </label>
            <select type='select' className='pac-type'>
              <option value='free' className='pac-input'>
                Free
              </option>
              <option value='premium' className='pac-input'>
                Premium
              </option>
            </select>
          </div>
          <div>
            <label htmlFor='f' className='label'>
              Name:
            </label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor='f' className='label'>
              Phone Number:
            </label>
            <input type='text' />
          </div>
          <button className='form-btn'>Submit</button>
        </form>
        </div>
      </section>
      <section className='mini-box-share'>
        <div className='wrap'>
          <p>Would you like to share with your friends?</p>
          <textarea className='input-share'>
          Are You Tired of Getting Embarrassing WhatsApp Status Views? 😳😳🤷🏻‍♂️🤷🏻‍♂️
👉https://johndoe .com
          </textarea>
        </div>
        <div>
          <p>Or use the share buttons below</p>
          <div>
            <FaWhatsappSquare className='share-icon'/>
            <FaFacebook className='share-icon'/>
            <FaTwitter className='share-icon'/>
          </div>
        </div>
      </section>
      <section className='mini-box-share'>
        <div className='wrap'>
          <h1>Blocked Contacts</h1>
          <p className='left-align'>Here is a list of the last 5 blocked contacts who have been found violating our rules and will therefore not be included in future compilations</p>
      <table>
        <tr className='tr-blocked'>
          <td className='td-blocked'>ffhe</td>
        </tr>
        <tr className='tr-blocked'>
          <td className='td-blocked'>he</td>
        </tr>
        <tr className='tr-blocked'>
          <td className='td-blocked'>he</td>
        </tr>
        <tr className='tr-blocked'>
          <td className='td-blocked'>he</td>
        </tr>
        <tr className='tr-blocked'>
          <td className='td-blocked'>he</td>
        </tr>
        
      </table>
      <hr />
        
        </div>
      </section>
    </>
  );
};

export default Home;
