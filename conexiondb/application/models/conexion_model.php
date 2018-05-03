<?php 
    class conexion_model extends CI_Model {
        public function GetAll(){
            //$query = $this->db->get('<tablename>'); selecciona la tabla a consultar
            $query = $this->db->get('login');
            return $query->result();
        }
    }