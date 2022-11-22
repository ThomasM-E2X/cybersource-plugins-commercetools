package isv.commercetools.reference.application.validation.rules.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.sphere.sdk.carts.Cart;
import isv.commercetools.api.extension.model.ExtensionError;
import isv.commercetools.api.extension.validation.InputValidator;
import java.util.ArrayList;
import java.util.List;

public class ShippingAddressValidationRule extends InputValidator<Cart> {

  public ShippingAddressValidationRule(ObjectMapper objectMapper) {
    super(objectMapper);
  }

  @Override
  public List<ExtensionError> validate(Cart cart) {
    var errors = new ArrayList<ExtensionError>();
    var shippingAddress = cart.getShippingAddress();
    validateRequiredField(errors, shippingAddress, "Shipping address");
    if (shippingAddress != null) {
      validateRequiredField(
        errors,
        shippingAddress.getStreetName(),
        "Shipping address street"
      );
      validateRequiredField(
        errors,
        shippingAddress.getCity(),
        "Shipping address city"
      );
      validateRequiredField(
        errors,
        shippingAddress.getPostalCode(),
        "Shipping address post code"
      );
      validateRequiredField(
        errors,
        shippingAddress.getRegion(),
        "Shipping address state"
      );
      validateRequiredField(
        errors,
        shippingAddress.getCountry(),
        "Shipping address country"
      );
    }
    return errors;
  }

  private void validateRequiredField(
    ArrayList<ExtensionError> errors,
    String city,
    String string
  ) {}
}
