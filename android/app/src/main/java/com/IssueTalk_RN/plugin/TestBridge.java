package com.IssueTalk_RN.plugin;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by lerdor on 2017/12/13.
 */

public class TestBridge extends ReactContextBaseJavaModule{
    public TestBridge (ReactApplicationContext rnContext){
        super(rnContext);
    }

    @Override
    public String getName() {
        return "TestBridge";
    }

    @ReactMethod
    public void sayHi(String name) {
        Toast.makeText(getReactApplicationContext(), name, Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void sayHiAndCallback(String name, Callback success , Callback error) {
        Toast.makeText(getReactApplicationContext(), name, Toast.LENGTH_SHORT).show();
        if (true){
            success.invoke("I'm success callback");
        }else {
            error.invoke("I'm error callback");
        }
    }
}
