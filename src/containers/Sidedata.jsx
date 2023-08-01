import React from 'react'
import {CiLocationOn} from 'react-icons/ci'
import {AiOutlineMail} from 'react-icons/ai'
import { FiPhone } from 'react-icons/fi'

const Sidedata = () => {
  return (
    <div className='sidedetail'>
        <div className='sidedetail__head'>Contact Details</div>
        <div className='sidedetail__body'>
            <div className='contact_detail'><CiLocationOn/> Bhadrapur, Jhapa</div>
            <div className='contact_detail'><AiOutlineMail/> arp2ctaula@gmail.com</div>
            <div className='contact_detail'><FiPhone/>+977 9863606020</div>
        </div>
    </div>
  )
}

export default Sidedata