Feature: Login de usuario
Background :
Given Usuario navega por la pagina 
And Usuario da click en pagina de acceso

  Scenario: EL usuario se loguea correctamente a la página
    Given Usuario ingresa usuario
    When Usuario ingresa password
    Then Usuario presiona botón ingresar
