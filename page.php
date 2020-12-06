
<?php
$q = intval($_GET['q']);
$num = $q - 1;
$name = "stejs";

$presentname = "stejs";
$jsondata = file_get_contents("json/data.json");
$json = json_decode($jsondata, true);



class Json {

	public $title;
	public $img;
	public $subtitle;
	public $text;
	public $bg;
	
	function __destruct() {
			
			
			echo "<body class='animation-area'>
		<ul class='box-area'>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		<section style='background-image: {$this->bg};' class='clasic' id='kaktus'>
			";
			if ("{$this->title}" == ""){
				echo "";
			} else {
				echo "<h1>{$this->title}</h1>";
			}
			if ("{$this->subtitle}" == ""){
				echo "";
			} else {
				echo "<h3>{$this->subtitle}</h3>";
			}
			
			if ("{$this->text}" == ""){
				echo "";
			} else {
				echo "<div class='text'>{$this->text}</div>";
			}
			
			
			
			if ("{$this->img}" == ""){
				echo "";
			} else {
				echo "<img src='{$this->img}'>";
			}
			echo "</section>"; 
		
	}	
	
}



class Decode extends Json {

	function __construct($title,$img,$subtitle,$text,$bg) {
		$this->title = $title;
		$this->img = $img;
		$this->subtitle = $subtitle;
		$this->text = $text;
		$this->bg = $bg;
	}
}


$json[$num] = new Decode($json[$name][$num]["title"],$json[$name][$num]["img"],$json[$name][$num]["subtitle"],$json[$name][$num]["text"],$json[$name][$num]["bg"]);






?>





