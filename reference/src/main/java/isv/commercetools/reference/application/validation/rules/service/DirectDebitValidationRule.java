package isv.commercetools.reference.application.validation.rules.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.sphere.sdk.carts.Cart;
import isv.commercetools.api.extension.model.ExtensionError;
import isv.commercetools.api.extension.validation.InputValidator;
import isv.commercetools.mapping.model.CustomPayment;
import java.util.ArrayList;
import java.util.List;

public class DirectDebitValidationRule extends InputValidator<CustomPayment> {

  public DirectDebitValidationRule(ObjectMapper objectMapper) {
    super(objectMapper);
  }

  @Override
  public List<ExtensionError> validate(CustomPayment payment) {
    var errors = new ArrayList<ExtensionError>();

    return errors;
  }
}
