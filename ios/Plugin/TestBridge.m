//
//  TestBridge.m
//  IssueTalk_RN
//
//  Created by Lerdor on 2017/12/12.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "TestBridge.h"

@implementation TestBridge


/*
 輸出的方法名字是否要變更，不變更就空值即可
 */
RCT_EXPORT_MODULE();

/*
 創建一個方法給js呼叫
 
 */
RCT_EXPORT_METHOD(sayHi:(NSString *)name)
{
  NSLog(@"hello: %@", name);
}

/*
 創建一個方法給js呼叫並Callback
 
 */
RCT_EXPORT_METHOD(sayHiAndCallback:(NSString *) name success:(RCTResponseSenderBlock)successCallback error:(RCTResponseSenderBlock) errorCallback)
{
  NSLog(@"hello: %@", name);
  if ([name isEqualToString:@"YUR"]) {
    successCallback(@[@"i'm success callback"]);
  }else {
    errorCallback(@[@"i'm error callback"]);
  }
}


@end
