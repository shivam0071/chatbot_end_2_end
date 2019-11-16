import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";
//declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  element: any;


  constructor() {

    this.element = $('.floating-chat');

  }

  openElement() {
    var element = $('.floating-chat');
    var messages = element.find('.messages');
    var textInput = element.find('.text-box');
    element.find('>i').hide();
    element.addClass('expand');
    element.find('.chat').addClass('enter');
    var strLength = textInput.val().length * 2;
    element.find('#sendMessage').click(this.sendNewMessage());
    messages.scrollTop(messages.prop("scrollHeight"));
  }




  closeElement() {

    var element = $('.floating-chat');

    document.querySelector('.floating-chat').classList.remove("expand");
    element.find('.chat').removeClass('enter').hide();
    element.find('>i').show();

    element.removeClass('expand');

    element.find('#sendMessage').off('click', this.sendNewMessage());


  }

  sendNewMessage() {
    var userInput = $('.text-box');
    var newMessage = userInput.html().replace(/\<div\>|\<br.*?\>/ig, '\n').replace(/\<\/div\>/g, '').trim().replace(/\n/g, '<br>');

    if (!newMessage) return;

    var messagesContainer = $('.messages');

    messagesContainer.append([
      '<li class="self">',
      newMessage,
      '</li>'
    ].join(''));

    // clean out old message
    userInput.html('');
    // focus on input
    userInput.focus();

    messagesContainer.finish().animate({
      scrollTop: messagesContainer.prop("scrollHeight")
    }, 250);
  }


}
