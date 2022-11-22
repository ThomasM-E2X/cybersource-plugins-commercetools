package isv.commercetools.reference.application.service.payment.directDebit;

import io.sphere.sdk.carts.Cart;
import isv.commercetools.mapping.model.CustomPayment;
import isv.commercetools.mapping.transformer.RequestTransformer;
import isv.commercetools.mapping.transformer.response.CybersourceResponseToFieldGroupTransformer;
import isv.commercetools.mapping.transformer.response.ResponseTransformer;
import isv.commercetools.reference.application.factory.payment.PaymentDetailsFactory;
import isv.commercetools.reference.application.service.payment.PaymentAuthorizationService;
import isv.commercetools.reference.application.validation.ResourceValidator;
import isv.payments.CybersourceClient;
import isv.payments.exception.PaymentException;
import isv.payments.model.fields.BillToFieldGroup;
import isv.payments.model.fields.CardFieldGroup;
import isv.payments.model.fields.ShipToFieldGroup;
import java.util.List;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class DirectDebitAuthorizationService
  extends PaymentAuthorizationService {

  private final CybersourceResponseToFieldGroupTransformer responseFieldGroupTransformer;

  public DirectDebitAuthorizationService(
    PaymentDetailsFactory paymentDetailsFactory,
    ResourceValidator<CustomPayment> paymentValidator,
    ResourceValidator<Cart> cartValidator,
    RequestTransformer authorizationRequestTransformer,
    ResponseTransformer responseTransformer,
    CybersourceClient cybersourceClient,
    CybersourceResponseToFieldGroupTransformer responseToFieldGroupTransformer
  ) {
    super(
      paymentDetailsFactory,
      paymentValidator,
      cartValidator,
      authorizationRequestTransformer,
      responseTransformer,
      cybersourceClient
    );
    this.responseFieldGroupTransformer = responseToFieldGroupTransformer;
    log.info("IN THE DIRECT DEBIT AUTH SERVICE");
  }
  // TODO: fix these types
  // @Override
  // public List<UpdateAction> process(PaymentDetails paymentDetails) {
  //     var result = this.superProcess(paymentDetails);
  //         try {
  //             // var visaCheckoutInfo = visaCheckoutQueryService.getVisaCheckoutData(paymentDetails);

  //             var billToFieldGroup = (BillToFieldGroup) responseFieldGroupTransformer.transform(paymentDetails, "billTo_", BillToFieldGroup.class);
  //             var shipToFieldGroup = (ShipToFieldGroup) responseFieldGroupTransformer.transform(paymentDetails, "shipTo_", ShipToFieldGroup.class);
  //             var cardFieldGroup =  (CardFieldGroup) responseFieldGroupTransformer.transform(paymentDetails, "card_", CardFieldGroup.class);
  //             // var visaCheckoutFieldGroup =  (VisaCheckoutResponseFieldGroup) responseFieldGroupTransformer.transform(visaCheckoutInfo, "vcReply_", VisaCheckoutResponseFieldGroup.class);

  //             updateCart(paymentDetails.getCart(), shipToFieldGroup, billToFieldGroup);
  //             // result.addAll(updateActionCreator.buildPaymentUpdateActions(cardFieldGroup, visaCheckoutFieldGroup));
  //         } catch (PaymentException e) {
  //             log.error("Could not process Visa Checkout address and card information after authorization", e);
  //         }
  //     return result;
  // }
}
