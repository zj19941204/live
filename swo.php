<?php
	$ws_server=new swoole_websocket_server('192.168.2.210',9502);

	$ws_server->set(array(
		'daemonize'=>true,
		'log_file'=>__DIR__.'/logs/web_socket.log'

	));

        $ws_server->on('open',function($ws,$request){


	});



	$ws_server->on('message',function($ws,$frame){
		pushMessage($ws,$frame->data,$frame->fd);
	});

	$ws_server->on('close',function($ws,$frame){
		echo date('Y-m-d H:i:s').'游客ID-'.$fd.' 退出了聊天室'."\r\n";
	});

	$ws_server->start();


	function pushMessage($ws,$data,$fd){
		echo date('Y-m-d H:i:s').' 游客ID-'.$fd.':'.$data."\r\n";
		foreach($ws->connections as $dd){
			$ws->push($dd,$fd.':'.$data);	
		}
	};
