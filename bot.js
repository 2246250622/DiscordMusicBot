    const {Client, RichEmbed, Discord} = require('discord.js') ;
    const client = new Client ;
    const settings = require('./settings.json') ;

    client.on('ready',()=>{
        console.log(`${client.user.tag} 準備好上戰場惹！`) ;
    }) ;

    client.on('message',msg=>{
        if(msg.content.startsWith(settings.prefix+'test')){
            msg.channel.send('test committed') ;
        }

        if(msg.content.includes('進入組隊房間')){
            if(msg.author.bot)
                  return ;        
       var msg1 = msg.content.replace(' ', '+');
       var msg2 = msg1.replace('\n', '%0D%0A');
       var msg3 = msg2.replace(' ', '+');
       var msg4 = msg3.replace('\n', '%0D%0A');
       var msg5 = msg4.replace(' ', '+');
       var msg6 = msg5.replace('\n', '%0D%0A');
       var msg7 = msg6.replace(' ', '+');
       var msg8 = msg7.replace('\n', '%0D%0A');
       var msg9 = msg8.replace(' ', '+');
       var msg10 = msg9.replace('\n', '%0D%0A');
       var msg11 = msg10.replace(' ', '+');

       msg.channel.send('```css\n[查詢結果]\n```') ;
       msg.reply('https://twlolstats.com/teammate/?teammates='+ msg11) ;
        }

           if(msg.content.includes(settings.prefix+'check ')){
            if(msg.author.bot)
                  return ;    
       var msg12 = msg.content.replace('!check ', '=');    
       

       msg.channel.send('https://twlolstats.com/summoner/?summoner'+msg12) ;
        }

     
    }) ;




    client.login(settings.token) ;