import onClickOutside from 'react-onclickoutside'
import React, {useState} from 'react'

function DropDown(){
   const [isOpen, setIsOpen] = useState(false)
   const [selectedValue, setSelectedValue] = useState('')
   const toggle = () => setIsOpen(!isOpen)

   DropDown.handleClickOutside = () => setIsOpen(false)

   
}