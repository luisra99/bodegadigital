import { GetProfileConfiguration } from "@/services/user/user.services";
import { decodeIdToken, getAllSessionParameters } from "./session";
import { SessionActions } from "@/store/hotkeys/types";
import { sendTokenRequest } from "./sign-in";
import { GetProducts } from "@/services/venta-regulada/products.services";

export function restoreSession(sessionActions:SessionActions) {
    getAllSessionParameters().then((sessionParams: any) => {
      let profile = null;
      if (sessionParams.ACCESS_TOKEN) {
        if (!sessionParams.PROFILE) {
          profile = GetProfileConfiguration();
        }
  
        sessionActions.create({
          tokenResponse: sessionParams,
          idToken: decodeIdToken(sessionParams.ID_TOKEN),
          isLoggedIn: true,
          profile: sessionParams.PROFILE ?? profile,
          notifications: sessionParams.NOTIFICATIONS,
        });
      }
    });
  }
  export async function createSession(sessionActions:SessionActions,code: string) {
    history.replaceState({}, document.title, window.location.pathname);
    sessionActions.create({
      isLoggedIn: false,
    });
    let profile: any = null;
    let notifications: any = null;
  
    const token = await sendTokenRequest(code);
  
    if (token.access_token) {
      profile = await GetProfileConfiguration();
      if (profile?.APP)
        notifications = await GetProducts(profile?.APP).then((productos: any[]) => {
          return (
            productos?.filter(({ confirmado }) => {
              return !confirmado;
            }).length ?? []
          );
        });
    }
    sessionActions.create({
      tokenResponse: token[0],
      idToken: token[1],
      isLoggedIn: true,
      profile: profile,
      notifications: notifications,
    });
  }