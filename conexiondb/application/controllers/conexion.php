<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class conexion extends CI_Controller {
	public function index()
	{
		$this->load->model('conexion_model');
		$consulta_usuarios_sql = $this->conexion_model->GetAll();
		echo json_encode($consulta_usuarios_sql);
	}
}