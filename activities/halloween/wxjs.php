<?php
//yhl
$config = array(
	'meflourish.com' => array('wx1cc33275a01a8ddf', 'af732043a150a40939a895a8fc292561'),
	'www.meflourish.com' => array('wx1cc33275a01a8ddf', 'af732043a150a40939a895a8fc292561'),
	'web.163.com' => array('wx1cc33275a01a8ddf', 'af732043a150a40939a895a8fc292561'),
);
$shareapi = array(
	'onMenuShareTimeline',
	'onMenuShareAppMessage',
	'onMenuShareQQ',
	'onMenuShareWeibo'
);
$voiceapi = array(
	'checkJsApi',
	'translateVoice',
	'startRecord',
	'stopRecord',
	'onVoiceRecordEnd',
	'playVoice',
	'onVoicePlayEnd',
	'pauseVoice',
	'stopVoice',
	'getNetworkType'
);
//$config = array();

if (!empty($_SERVER['HTTP_REFERER'])){
	$ref = explode('/', $_SERVER['HTTP_REFERER']);
	$host = substr($ref[2],0);
	if (in_array($host, array_keys($config))){
		require_once "jssdk.php";
		$jssdk = new JSSDK($config[$host][0], $config[$host][1]);
		$signPackage = $jssdk->GetSignPackage();

		if (!empty($_GET['debug'])){
			$signPackage['debug']=true;
		}
		$signPackage['jsApiList'] = $shareapi;
		unset($signPackage['rawString']);
		unset($signPackage['url']);
		echo 'var wx_conf = '.json_encode($signPackage).';';
	}
}