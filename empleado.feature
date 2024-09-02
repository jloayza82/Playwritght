Feature: Crear empleado

  Scenario: El usuario creae empleado correctamente
    Given Usuario ingresa usuario
    When Usuario ingresa password
    And Usuario ingresa a opción Admin
    And Usuario ingresa a opción Add
    And Usuario ingresa campos para crear empleado
    Then Usuario crea empleado satisfactoriamente
